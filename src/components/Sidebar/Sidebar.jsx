import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Sidebar.css";
import { AppContext } from "../../context/AppContext";

const Sidebar = ({ products }) => {
  const [searchText, setSearchText] = useState("");
  const [searchBtn, setSearchBtn] = useState(false);
  const { setProductSearch } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (searchBtn) {
      setSearchBtn(false);
    }
  };

  const searchItem = () => {
    const search = products.filter((prod) => {
      return prod.title.toLowerCase().includes(searchText.toLowerCase());
    });
    if (searchText !== "") {
      if (search.length !== 0) {
        setProductSearch(search);
        navigate("/search");
      } else {
        setSearchBtn(true);
      }
    } else {
      setSearchBtn(true);
    }
  };

  return (
    <div className="sidebar-container">
      <section className="search-header">
        <h2>Buscar Producto</h2>
        <div className="search-block">
          <input
            onChange={(e) => handleSearch(e)}
            type="text"
            value={searchText}
          />
          <button onClick={() => searchItem()} className="btn">
            Buscar
          </button>
        </div>
      </section>
      {searchText !== "" && (
        <section className="search-result">
          {products.map((prod) => {
            if (prod.title.toLowerCase().includes(searchText.toLowerCase())) {
              return (
                <li className="search-list" key={prod.id}>
                  <Link to={`/detail/${prod.id}`}> {prod.title}</Link>
                </li>
              );
            }
          })}
          {searchBtn && <p>No se encontraron coincidencias</p>}
        </section>
      )}
    </div>
  );
};

export default Sidebar;
