import "./App.css";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App" >
      <UserProvider>

      <CartProvider>
        <Routes />
      </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
