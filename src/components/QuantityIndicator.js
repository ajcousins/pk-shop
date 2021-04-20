import classes from "./Navigation.module.css";
import cart from "../assets/icons/shoppng-cart.svg";

const QuantityIndicator = (props) => {
  let circle = null;

  if (props.quantity) {
    circle = <div className={classes.circle}>{props.quantity}</div>;
  }

  return (
    <div className={classes.cart}>
      <img className={classes.cart} src={cart} alt='cart' />
      {circle}
    </div>
  );
};
export default QuantityIndicator;
