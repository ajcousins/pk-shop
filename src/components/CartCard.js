import classes from "./Cart.module.css";
import MiniQuant from "./MiniQuant";

const CartCard = (props) => {
  let subTotalString = `£ ${props.subTotal.toFixed(2)}`;

  return (
    <div className={classes.cardBackground}>
      <div className={classes.colA}>
        <img
          className={classes.productIcon}
          src={props.productImg}
          alt={props.productTitle}
        />
      </div>
      <div className={classes.colB}>
        <div className={classes.text}>{props.productTitle}</div>
        <MiniQuant
          qty={props.productQty}
          updateQty={props.updateQty}
          id={props.id}
          incrementQty={props.incrementQty}
          decrementQty={props.decrementQty}
        />
      </div>
      <div className={classes.colC}>{subTotalString}</div>
    </div>
  );
};
export default CartCard;
