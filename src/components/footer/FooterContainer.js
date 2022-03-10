import { Box, Container } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import "./footer.css"
const FooterContainer = () => {
  return (
    <footer>
      <Box
        component="footer"
        className="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Soy un footer feliz : ) 😁
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default FooterContainer;
