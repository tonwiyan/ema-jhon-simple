import React from 'react';
import './App.css';
import Header from './components/Header';
import ShopInfo from './components/ShopInfo/ShopInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import NotFound from './components/Product/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
            <ShopInfo></ShopInfo>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/manage'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
            <ShopInfo></ShopInfo>
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      {/* 
      <ShopInfo></ShopInfo> */}
    </div >
  );
}

export default App;
