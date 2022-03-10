import { Container } from "@mui/material";
import React from "react";
import "./errorPage.css";
const ErrorPage = () => {
  return (
      <Container  >
        <img
          src={require("./errorPage.png")}
          width="75%"
          height="75%"
          className="d-inline-block align-top boogiBooMonster"
          alt="AVS Logo"
        />
      </Container>
  );
};

export default ErrorPage;
