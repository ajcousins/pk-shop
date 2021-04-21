import ProductCard from "./ProductCard";
import classes from "./Shop.module.css";

import Listing from "./Listing";

const Shop = (props) => {
  // console.log(Listing);
  // Listing.map((item) => {
  //   console.log(item);
  // });

  const cartAddHandler = (product) => {
    // console.log("Add to cart", product);
    props.updateCart(product);
  };

  return (
    <div className={classes.container}>
      {Listing.map((item) => {
        return (
          <ProductCard
            title={item.title}
            key={item.id}
            img={item.img}
            price={item.price}
            description={item.description}
            cartAdd={() => cartAddHandler(item.id)}
          />
        );
      })}
    </div>
  );
};
export default Shop;
