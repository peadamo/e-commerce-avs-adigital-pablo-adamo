import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import LogUserButtons from "./LogUserButtons";
const pages = ["Escaners", "Impresoras", "Destructoras"];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const NavBar = () => {
  const user = useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const itemsQuantity = useContext(CartContext).itemsQuantity;
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const exitButton = () => {
    handleCloseUserMenu();
    user.logUser({
      id: null,
      userName: null,
      password: null,
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/">
                <img
                  src={require("./BrandLogo.png")}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="AVS Logo"
                />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      to={`category/${page.toLowerCase()}`}
                      className="white"
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* barra menu desktop */}
            <Typography
              key={"?"}
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link to="/">
                <img
                  src={require("./BrandLogo.png")}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="AVS Logo"
                />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link to={`category/${page.toLowerCase()}`} className="white">
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* contenedor derecho barra menu */}
            <Box
              sx={{ flexGrow: 0, display: "inline-flex", alignItems: "center" }}
            >
              {user.user.id == null ? (
                <>
                  <LogUserButtons />
           
                </>
              ) : (
                <>
                  {/* icono del user y submenu */}
                  <Box>
                    <h6>{user.user.userName}</h6>
                  </Box>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                      <Avatar alt="Remy Sharp" src={user.user.imgSrc} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem key={"profile"} onClick={handleCloseUserMenu}>
                      <Link to={"profile"} className="white">
                        <Typography textAlign="center">Perfil</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem key={"orders"} onClick={handleCloseUserMenu}>
                      <Link to={"orders"} className="white">
                        <Typography textAlign="center">Pedidos</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem key={"exit"} onClick={exitButton}>
                      <Typography textAlign="center">Salir</Typography>
                    </MenuItem>
                  </Menu>
                </>
              )}

              {/* ingreso a cuenta y registro de usuario */}
              <Link to="/cart" className="white">
                <IconButton
                  size="large"
                  aria-label="show cart counter"
                  color="inherit"
                >
                  <Badge badgeContent={itemsQuantity} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;
