import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./AuctionProducts.css";
import AuctionProd from "../AuctionProd/AuctionProd";

const AuctionProducts = () => {
  const { auctionList } = useContext(AppContext);
  /* console.log(auctionList); */
  return auctionList.length !== 0 ? (
    <div className="container auction-container">
      {auctionList.map((auctionProd) => {
        return <AuctionProd prod={auctionProd} key={auctionProd.id} />;
      })}
    </div>
  ) : (
    <div className="container auction-container">
      <h2>No tiene productos en puja</h2>
    </div>
  );
};

export default AuctionProducts;
