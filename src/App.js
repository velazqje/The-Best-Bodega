import "./App.css";

import stores from "./data/stores";
import items from "./data/items";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import OrderPage from "./pages/OrderPage";
import StoresPage from "./pages/StoresPage";
import HomePage from "./pages/HomePage";

import Nav from "./components/Nav";

import { FaChevronCircleDown, FaChevronCircleUp} from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>The Best Bodega</h1>
          <p>Feed your family the best!</p>
          <Nav />

        </header>
        <main className="App-main">
          <article className="App-article">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/order">
            <OrderPage items={items}/>
          </Route>
          <Route path="/stores">
            <StoresPage stores={stores}/>
          </Route>
          </article>
        </main>
        <footer className="App-footer">
          <p>
            Modified in October 2022.{" "}
            <cite>&copy; 2022 Jesseline Velazquez</cite>
          </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
