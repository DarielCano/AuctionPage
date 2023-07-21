import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { BiUserCircle } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";

import "./Nav.css";
import { AppContext } from "../../context/AppContext";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { auctionList } = useContext(AppContext);
  const showCategories = () => {
    setVisible(!visible);
  };

  return (
    <header className="header">
      <Link to={"/"} className="logo">
        Logo
      </Link>
      <div className="header-right">
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "is-active " : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-links__cat">
              <p onClick={() => showCategories()}>Categorías</p>
              <ul className={visible == false ? "none" : "categories"}>
                <li>
                  <NavLink
                    onClick={() => showCategories()}
                    to={"/categoty/:ropa"}
                    className={({ isActive }) => (isActive ? "is-active " : "")}
                  >
                    Ropa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => showCategories()}
                    to={"/categoty/:zapatos"}
                    className={({ isActive }) => (isActive ? "is-active " : "")}
                  >
                    Zapatos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => showCategories()}
                    to={"/categoty/:objetos"}
                    className={({ isActive }) => (isActive ? "is-active " : "")}
                  >
                    Objetos
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Link to={"/auth/login"} className="user">
          <div className="user-icon">
            <BiUserCircle className="icon" />
          </div>
          <h3 className="user-name">Acceder</h3>
        </Link>

        <Link to={"/auction"} className="header-bag">
          <div className="auction-icon">
            <BsHandbag className="icon" />
          </div>
          <p className="header-bag__quantity">
            {auctionList.length > 0 ? auctionList.length : "0"}
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
