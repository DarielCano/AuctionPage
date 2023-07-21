import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockFetch } from "../../js/mockfetch";

import AuctionBtn from "../AuctionBtn/AuctionBtn";

import "./ItemDetailContainer.css";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [isPress, setIsPress] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    mockFetch()
      .then((resp) => {
        setProduct(() => {
          return resp.find((prod) => prod.id == pid);
        });
      })
      .finally(() => setLoader(false));
  }, [pid]);

  return (
    <>
      {loader == true ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="item-cont">
          <div className="item-img">
            <img src={product?.src} alt={product?.description} />
          </div>
          <div className="item-info">
            <div className="item-text">
              <h2>{product?.title}</h2>
              <p>
                {/* {product?.description} */}Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec congue cursus est, ac auctor
                nisl dapibus non. Sed nec neque.
              </p>
            </div>
            <div className="item-function">
              <div className="item-price">
                <p>Precio Inicial: </p>
                <strong>${product.price}</strong>
              </div>
              <div className="item-btn">
                <AuctionBtn prod={product} />
                {/*  <button onClick={() => setIsPress(!isPress)} className="btn">
                  Pujar
                </button>
                {isPress && (
                  <input placeholder="Inserte precio" type="number" /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
