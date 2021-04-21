import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentCart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isCartActive, setIsCartActive] = useState(false);

  const addToCart = (product) => {
    let cartCopy = [...currentCart];
    const index = cartCopy.findIndex((item) => item.id === product);

    // If item doesn't already exist in basket- push single item onto basket.
    if (index === -1) cartCopy.push({ id: product, qty: 1 });
    // Otherwise, update quantity of existing item.
    else cartCopy[index].qty++;

    let quantity = totalQuantity;
    quantity++;
    setTotalQuantity(quantity);
    console.log(cartCopy);
    setCart(cartCopy);
  };

  const cartOff = () => {
    setIsCartActive(false);
  };

  let cart = null;
  if (isCartActive) {
    cart = <Cart cartOff={cartOff} currentCart={currentCart} />;
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
