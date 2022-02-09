import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/item-list-container/ItemListConteiner";
import ProductView from "../components/productView/ProductView";
import ItemDetailConteinerClase08 from "../components/item-detail-container/ItemDetailConteinerClase08";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category" element={<ProductView />} />
          <Route path="/category/:id" element={<ItemListContainer />} />


          <Route path="/item/:id" element={<ItemDetailConteinerClase08 />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
