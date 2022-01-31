import { Fragment } from "react";
const FunctionalComponent = ({ name, age }) => {
  return <Fragment>
    <h1>Functional Component</h1>
    <h2>Nombre:{name}</h2>
    <h2>Edad:{age + 2}</h2>
  </Fragment>;
};

export default FunctionalComponent;
