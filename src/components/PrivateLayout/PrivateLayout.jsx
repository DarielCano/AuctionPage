import { Routes, Route } from "react-router-dom";
import ItemListAdmin from "../ItemListAdmin/ItemListAdmin";

const PrivateLayout = () => {
  return (
    <Routes>
      <Route index element={<ItemListAdmin />} />
    </Routes>
  );
};

export default PrivateLayout;
