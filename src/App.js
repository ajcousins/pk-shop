import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [currentCart, setCart] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isCartActive, setIsCartActive] = useState(false);

  /* 
    useEffect(() => {
    let count = 0;
    for (let item in currentCart) {
      count += currentCart[item];
    }
    setTotalQuantity(count);
  }, [currentCart]);
  */

  const addToCart = (product) => {
    let cartCopy = Object.assign({}, currentCart);
    if (!cartCopy[product]) cartCopy[product] = 1;
    else cartCopy[product]++;
    setCart(cartCopy);
    let quantity = totalQuantity;
    quantity++;
    setTotalQuantity(quantity);
    setIsCartActive(true);
  };

  const cartOff = () => {
    setIsCartActive(false);
  };

  let cart = null;
  if (isCartActive) {
    cart = <Cart cartOff={cartOff} />;
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
