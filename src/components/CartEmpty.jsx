import { Link } from "react-router-dom";
import empty from "../img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className="all">
      <div className="container">
        <div className="empty-cart">
          <img src={empty} />
          <h2>No items yet</h2>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button>Go to items</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CartEmpty;
