import classes from "./Cart.module.css";
import escape from "../assets/icons/X_01.svg";
import CartCard from "./CartCard";

const Cart = (props) => {
  return (
    <div>
      <div className={classes.background} onClick={props.cartOff}></div>
      <div className={classes.cartBackground}>
        <div className={classes.innerWrapper}>
          <div className={classes.header}>
            <h2 className={classes.cartTitle}>Your Shopping Cart</h2>
            <img
              className={classes.escape}
              src={escape}
              alt='escape'
              onClick={props.cartOff}
            />
          </div>
          <CartCard />
        </div>
      </div>
    </div>
  );
};
export default Cart;
