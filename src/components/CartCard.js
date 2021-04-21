import classes from "./Cart.module.css";
import MiniQuant from "./MiniQuant";
import productFam from "../assets/product/FAM01-product-01.jpg";
import productOH from "../assets/product/OH-product-01.jpg";
import productVH from "../assets/product/VH-product-01.jpg";
import productDH from "../assets/product/DH-product-01.jpg";
import productGA from "../assets/product/GA-product-01.jpg";

const CartCard = (props) => {
  return (
    <div className={classes.cardBackground}>
      <div className={classes.colA}>
        <img className={classes.productIcon} src={productOH} />
      </div>
      <div className={classes.colB}>
        <div className={classes.text}>Dangerously Hot Sauce</div>
        <MiniQuant />
      </div>
      <div className={classes.colC}>£ 5.50</div>
    </div>
  );
};
export default CartCard;
