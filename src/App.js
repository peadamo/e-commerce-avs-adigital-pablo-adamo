import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductView from "./components/productView/ProductView";






function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductView/>
    </div>
  );
}

export default App;
