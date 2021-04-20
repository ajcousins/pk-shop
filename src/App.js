import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [currentCart, setCart] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);

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
  };

  return (
    <div>
      <Router>
        <Navigation quantity={totalQuantity} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact>
            <Shop updateCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
