import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import ProductList from "./Containers/ProductList";
import ProductDetails from "./Containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
