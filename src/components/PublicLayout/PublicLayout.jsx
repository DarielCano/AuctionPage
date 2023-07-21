import { Routes, Route } from "react-router-dom";

import ItemListContainer from "../ItemListContainer/ItemListContainer";
import AuctionProducts from "../AuctionProducts/AuctionProducts";

import "./PublicLayout.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const PublicLayout = () => {
  return (
    <Routes>
      <Route index element={<ItemListContainer />} />
      <Route path="categoty/:cid" element={<ItemListContainer />} />
      <Route path="detail/:pid" element={<ItemDetailContainer />} />
      <Route path="auction" element={<AuctionProducts />} />
    </Routes>
  );
};

export default PublicLayout;
