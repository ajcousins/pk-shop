import classes from "./Cart.module.css";
import escape from "../assets/icons/X_01.svg";
import CartCard from "./CartCard";
import Listing from "./Listing";

const Cart = (props) => {
  let cart = null;
  if (props.currentCart) {
    cart = props.currentCart.map((item) => {
      let obj = item;
      let index = Listing.findIndex((product) => product.id === item.id);
      let singleItemPrice = Listing[index].price;
      let subTotal = item.qty * singleItemPrice;
      obj.subTotal = subTotal;
      obj.qty = item.qty;
      obj.title = Listing[index].title;
      obj.img = Listing[index].img;
      return obj;
    });
  }

  let itemsInCart = null;
  if (cart.length !== 0) {
    itemsInCart = cart.map((item) => {
      return (
        <CartCard
          productQty={item.qty}
          key={item.id}
          id={item.id}
          productImg={item.img}
          productTitle={item.title}
          subTotal={item.subTotal}
          updateQty={props.updateQty}
          incrementQty={props.incrementQty}
          decrementQty={props.decrementQty}
        />
      );
    });
  }

  let sumTotal = () => {
    const deliveryFee = 1.5;
    let total = `£ ${(
      cart.reduce((prev, cur) => {
        return prev + cur.subTotal;
      }, 0) + deliveryFee
    ).toFixed(2)}`;
    return <div>{total}</div>;
  };

  let cartFooter = null;
  if (cart.length !== 0) {
    cartFooter = (
      <div>
        <div className={classes.cardBackground}>
          <div className={classes.footLabel}>Standard UK Delivery</div>
          <div className={classes.colC}>£ 1.50</div>
        </div>
        <div className={classes.cardBackground}>
          <div className={classes.footLabel}>Total</div>
          <div className={classes.colC}>{sumTotal()}</div>
        </div>
        <button className={classes.checkout}>Checkout</button>
      </div>
    );
  }

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
          {itemsInCart}
          {cartFooter}
        </div>
      </div>
    </div>
  );
};
export default Cart;
