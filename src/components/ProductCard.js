import classes from "./Shop.module.css";

const ProductCard = (props) => {
  const price = `£ ${props.price.toFixed(2)}`;
  return (
    <div className={classes.card}>
      <img className={classes.img} src={props.img} alt={props.title} />
      <div className={classes.info}>
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.text}>{props.description}</p>
        <div className={classes.bottom}>
          <button className={classes.add} onClick={() => props.cartAdd()}>
            Add to cart
          </button>
          <h2 className={classes.price}>{price}</h2>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
