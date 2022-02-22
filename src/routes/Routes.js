import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/item-list-container/ItemListConteiner";

import ItemDetailConteiner from "../components/item-detail-container/ItemDetailConteiner";
import CartConteiner from "../components/cart/CartConteiner";
import OCRTest from "../ocr/OCRTest";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartConteiner/>} />
        <Route path="/ocr" element={<OCRTest/>} />
          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailConteiner />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};



export default Routes;
