import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Loader from "../Loader/Loader.jsx";

import { mockFetch } from "../../js/mockfetch.js";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { cid } = useParams();

  useEffect(() => {
    mockFetch().then((resp) => {
      if (!cid) {
        setProducts(resp);
      } else {
        setProducts(() => {
          return resp.filter((prod) => prod.category == cid);
        });
      }
    });
  }, [cid]);

  return products.length == 0 ? (
    <div className="loader">
      <Loader />
    </div>
  ) : (
    <div className="gral-container">
      <div className="item-container">
        <ItemList products={products} />
      </div>
      <Sidebar products={products} />
    </div>
  );
};

export default ItemListContainer;
