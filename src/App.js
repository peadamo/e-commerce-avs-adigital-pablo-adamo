import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ItemListConteiner from './components/item-list-container/ItemListConteiner';
import NavBar from "./components/NavBar/NavBar";



function App() {
  return (
    <div className="App">
      <NavBar />

      <hr/>
      <ItemListConteiner/>
    </div>
  );
}

export default App;
 