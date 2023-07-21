import { useEffect, useState } from "react";

import ItemAdmin from "../ItemAdmin/ItemAdmin.jsx";

import Loader from "../Loader/Loader.jsx";

import { mockFetch } from "../../js/mockfetch.js";
import AddProduct from "../AddProduct/AddProduct.jsx";

import "./ItemListAdmin.css";

const ItemListAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    mockFetch().then((resp) => {
      setProducts(resp);
    });
  }, []);

  return products.length == 0 ? (
    <div className="loader">
      <Loader />
    </div>
  ) : (
    <div className="gral-container">
      <div className="itemAdmin-container">
        <ItemAdmin products={products} />
        <AddProduct />
      </div>
    </div>
  );
};

export default ItemListAdmin;
