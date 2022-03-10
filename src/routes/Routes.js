import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/item-list-container/ItemListConteiner";
import ItemDetailConteiner from "../components/item-detail-container/ItemDetailConteiner";
import CartConteiner from "../components/cart/CartConteiner";
import UserProfileContainer from "../components/user-container/UserProfileContainer";
import UserOrdersContainer from "../components/user-container/UserOrdersContainer";
import ErrorPage from "../components/error-page/ErrorPage";
import CreateUser from "../components/user-container/CreateUser";
import FooterContainer from "../components/footer/FooterContainer";
import { Box } from "@mui/system";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Box height={"100vh"} >

        <Switch>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartConteiner />} />
          <Route path="/profile" element={<UserProfileContainer />} />
          <Route path="/orders" element={<UserOrdersContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/newUser" element={<CreateUser />} />

          
        </Switch>
        </Box>
        <FooterContainer/>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
