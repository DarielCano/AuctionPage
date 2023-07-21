import { useContext } from "react";
import AuctionBtn from "../AuctionBtn/AuctionBtn";
import { AppContext } from "../../context/AppContext";

import "./AuctionProd.css";

import { BsTrash3 } from "react-icons/bs";

const AuctionProd = ({ prod }) => {
  const { deleteAuction } = useContext(AppContext);

  return (
    <div className="prod-container">
      <div className="prod-img">
        <img src={prod.src} alt={prod.title} />
      </div>
      <div className="prod-title">{prod.title}</div>
      <div className="prod-auctionPrice">{prod.auctionPrice}</div>
      <div className="prod-auction">
        <AuctionBtn prod={prod} />
      </div>

      <div className="prod-delete" onClick={() => deleteAuction(prod.id)}>
        <BsTrash3 />
      </div>
    </div>
  );
};

export default AuctionProd;
