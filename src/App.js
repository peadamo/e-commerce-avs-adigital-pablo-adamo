import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChildrenComponent from './components/children-component/ChildrenComponent';
import { ClassComponent } from './components/class-component/ClassComponent';
import FootPage from './components/function-component/FootPage';
import FunctionalComponent from './components/function-component/FunctionalComponent';

import ItemListConteiner from './components/item-list-container/ItemListConteiner';
import NavBar from "./components/NavBar/NavBar";



function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <FunctionalComponent name={"pepe"} age={10} />
      <hr />
      <ClassComponent name={"jose"} age={22} />
      <hr />
      <ItemListConteiner />
      <ChildrenComponent otherProp={"El titulo"}>
        <h1>soy un children componet</h1>
        <p>Soy un aprra ffoosdfpajfiosadjfosidgjhosidghjosdijfoisdjf</p>
      </ChildrenComponent>

      <FootPage />

    </div>
  );
}

export default App;
