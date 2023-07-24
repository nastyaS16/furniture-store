import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItems, selectCart } from "../redux/slices/cartSlice";
import CartItem from "../components/CartItem";
import { IoTrashBinOutline } from "react-icons/io5";
import CartEmpty from "../components/CartEmpty";

const Cart = () => {
  const dispath = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((acc, cur) => acc + cur.count, 0);

  const onClickClear = () => {
    dispath(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="all">
      <div className="container">
        <div className="heading">
          <h2>Cart</h2>
          <button onClick={onClickClear} className="clean-cart">
            <IoTrashBinOutline />
            Clear cart
          </button>
        </div>
        <div className="cart-items-total">
          <div className="cart-items">
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="total">
            <h3>Total price: {totalPrice} €</h3>
            <h4>Total items: {totalCount} </h4>
            <button>Go to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
