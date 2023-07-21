import { createContext, useState } from "react";

export const AppContext = createContext([]);

export function AppContextProvider({ children }) {
  const [productSearch, setProductSearch] = useState([]);
  const [auctionList, setAuctionList] = useState([]);
  const [countdown, setCountdown] = useState(false);

  const startAuction = (prod) => {
    let auctionProdIndex = auctionList.findIndex((auctionProd) => {
      return auctionProd.title === prod.title;
    });
    if (prod.inAuctionPrice !== 0) {
      if (auctionProdIndex === -1) {
        if (prod.inAuctionPrice > prod?.price) {
          setCountdown(true);
          (prod.auctionPrice = prod.inAuctionPrice),
            setAuctionList([...auctionList, prod]);
        }
      } else {
        if (prod.inAuctionPrice > auctionList[auctionProdIndex].auctionPrice) {
          auctionList[auctionProdIndex].auctionPrice = prod.inAuctionPrice;
          auctionList[auctionProdIndex].inAuctionPrice = prod.inAuctionPrice;
          setAuctionList([...auctionList]);
        }
      }
    }
  };

  const deleteAuction = (id) => {
    setAuctionList(
      auctionList.filter((prod) => {
        return prod.id !== id;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        productSearch,
        setProductSearch,
        auctionList,
        startAuction,
        deleteAuction,
        countdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
