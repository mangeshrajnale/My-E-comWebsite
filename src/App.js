import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from './pages/Pages'
import Data from "./componants/flashDeals/Data"
import { useState } from "react";
import Cart from "./common/cart/Cart";


function App() {
  // step 1: fetch data from database
  const {value1} = Data

  const [cartItem, setCardItem] = useState([]) 
  const addToCart =(product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
   if(productExit){
    setCardItem(cartItem.map((item) =>
    (item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item)))
   }
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          {/* <Route exact path="" element={} > */}
          <Route path="/" exact>
            <Pages value1={value1} addToCart = {addToCart} /> 
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart = {addToCart} /> 
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
