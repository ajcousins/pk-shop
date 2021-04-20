import ProductCard from "./ProductCard";
import classes from "./Shop.module.css";
import productFam from "../assets/product/FAM01-product-01.jpg";
import productOH from "../assets/product/OH-product-01.jpg";
import productVH from "../assets/product/VH-product-01.jpg";
import productDH from "../assets/product/DH-product-01.jpg";
import productGA from "../assets/product/GA-product-01.jpg";

const Shop = (props) => {
  // console.log(props);
  const listing = [
    {
      title: "Hot Pack Fam",
      id: "FAM",
      img: productFam,
      price: 20,
      description:
        "Can’t decide which sauce to choose? Get the whole family of sauces for a discounted price! All Pepper Kitchen sauces are made from natural and fresh ingredients.",
    },
    {
      title: "Hot Sauce",
      quantity: "150ml",
      id: "OH",
      img: productOH,
      price: 5.5,
      description:
        "Hot sauce made with our original full flavour. Inspired by the London food scene with its of world of culinary wealth, Pepper Kitchen blends fresh ingredients into a London hot sauce that really puts flavour first.",
    },
    {
      title: "Very Hot Sauce",
      quantity: "150ml",
      id: "VH",
      img: productVH,
      price: 5.5,
      description:
        "As flavoursome as Pepper Kitchen Hot Sauce, only hotter. Inspired by the London food scene with its of world of culinary wealth, Pepper Kitchen blends fresh ingredients into a London hot sauce that really puts flavour first.",
    },
    {
      title: "Dangerously Hot Sauce",
      quantity: "150ml",
      id: "DH",
      img: productDH,
      price: 7.5,
      description:
        "Our original flavour, but with the challenging heat of scorpion, reaper, and ghost peppers. Inspired by the London food scene with its of world of culinary wealth.",
    },
    {
      title: "Garlic Sauce",
      quantity: "150ml",
      id: "GA",
      img: productGA,
      price: 5.5,
      description:
        "Our original flavour, but with the challenging heat of scorpion, reaper, and ghost peppers. Inspired by the London food scene with its of world of culinary wealth.",
    },
  ];

  const cartAddHandler = (product) => {
    // console.log("Add to cart", product);
    props.updateCart(product);
  };

  return (
    <div className={classes.container}>
      {listing.map((item) => {
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
