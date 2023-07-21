import { useContext, useState } from "react";
import "./Item.css";

import { Link } from "react-router-dom";

import AuctionBtn from "../AuctionBtn/AuctionBtn";
import Clock from "../Clock/Clock";
import { AppContext } from "../../context/AppContext";

const Item = ({ prod }) => {
  const [showNewPrice, setShowNewPrice] = useState(false);
  const { countdown } = useContext(AppContext);
  return (
    <div className="card">
      <Link to={`/detail/${prod.id}`} className="card-img">
        <img src={prod?.src} alt={prod?.title} />
      </Link>

      <div className="card-content">
        <div className="card-title">
          <h3>{prod?.title}</h3>
        </div>
        <div className="card-price">
          {countdown && <Clock />}
          <div className="card-price__price">
            <p>
              {showNewPrice == false ? "Precio Inicial:" : "Precio en Puja"}{" "}
            </p>
            <strong>${showNewPrice ? prod?.auctionPrice : prod.price}</strong>
          </div>
        </div>
        <div className="card-btn">
          <AuctionBtn prod={prod} />
        </div>
      </div>
    </div>
  );
};

export default Item;
