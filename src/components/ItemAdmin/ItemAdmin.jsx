import "../Item/Item.css";
import { Link } from "react-router-dom";

const ItemAdmin = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((prod) => {
        return (
          <div key={prod.id} className="card">
            <Link to={`/detail/${prod.id}`} className="card-img">
              <img src={prod?.src} alt={prod?.title} />
            </Link>

            <div className="card-content">
              <div className="card-title">
                <h3>{prod?.title}</h3>
              </div>
              <div className="card-price">
                <p>
                  {prod.auctionPrice === 0
                    ? "Precio Inicial:"
                    : "Precio en Puja"}
                </p>
                <strong>
                  ${prod.auctionPrice !== 0 ? prod?.auctionPrice : prod.price}
                </strong>
              </div>
              <div className="card-btn">Nada aun</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemAdmin;
