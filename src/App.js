import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [currentCart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isCartActive, setIsCartActive] = useState(false);

  useEffect(() => {
    let cartCopy = [...currentCart];
    let combinedQty = cartCopy.reduce((prev, cur) => {
      return prev + cur.qty;
    }, 0);
    let qtyOutput = combinedQty > 99 ? 99 : combinedQty;
    setTotalQuantity(qtyOutput);
  }, [currentCart]);

  const addToCart = (product) => {
    let cartCopy = [...currentCart];
    const index = cartCopy.findIndex((item) => item.id === product);
    if (index === -1) cartCopy.push({ id: product, qty: 1 });
    else cartCopy[index].qty++;
    setCart(cartCopy);
    setIsCartActive(true);
  };

  const cartOff = () => {
    setIsCartActive(false);
  };

  const updateQty = (qty, product) => {
    let cartCopy = [...currentCart];
    const index = cartCopy.findIndex((item) => item.id === product);
    if (qty > 0 && qty < 100) {
      cartCopy[index].qty = Number(qty);
    } else if (Number(qty) === 0) {
      cartCopy.splice(index, 1);
    }
    setCart(cartCopy);
  };

  const incrementQty = (product) => {
    let cartCopy = [...currentCart];
    const index = cartCopy.findIndex((item) => item.id === product);
    if (cartCopy[index].qty < 99) {
      cartCopy[index].qty++;
    }
    setCart(cartCopy);
  };

  const decrementQty = (product) => {
    let cartCopy = [...currentCart];
    const index = cartCopy.findIndex((item) => item.id === product);
    if (cartCopy[index].qty === 1) {
      cartCopy.splice(index, 1);
    } else if (cartCopy[index].qty > 1) {
      cartCopy[index].qty--;
    }
    setCart(cartCopy);
  };

  let cart = null;
  if (isCartActive) {
    cart = (
      <Cart
        cartOff={cartOff}
        currentCart={currentCart}
        updateQty={(qty, product) => updateQty(qty, product)}
        incrementQty={(product) => incrementQty(product)}
        decrementQty={(product) => decrementQty(product)}
      />
    );
  }

  return (
    <div>
      <Router>
        <Navigation
          quantity={totalQuantity}
          cartOn={() => {
            setIsCartActive(true);
          }}
        />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact>
            <Shop updateCart={addToCart} />
          </Route>
        </Switch>
        {cart}
      </Router>
    </div>
  );
}

export default App;
