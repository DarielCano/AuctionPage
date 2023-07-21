import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./AuctionBtn.css";

const AuctionBtn = ({ prod }) => {
  const [auctionPrice, setAuctionPrice] = useState(0);
  const { startAuction } = useContext(AppContext);
  const [isPress, setIsPress] = useState(false);

  const getAuctionPrice = (e) => {
    setAuctionPrice(e.target.value);
  };

  return (
    <>
      <button onClick={() => setIsPress(!isPress)} className="btn">
        {!isPress ? "Pujar" : "Atrás"}
      </button>
      {isPress && (
        <div className="send-block">
          <input
            placeholder="Inserte precio"
            type="number"
            min={prod.auctionPrice}
            max={1000}
            onChange={(e) => {
              getAuctionPrice(e);
            }}
          />
          <AiOutlineArrowRight
            className="send-btn"
            onClick={() =>
              startAuction({ ...prod, inAuctionPrice: auctionPrice })
            }
          />
        </div>
      )}
    </>
  );
};

export default AuctionBtn;
