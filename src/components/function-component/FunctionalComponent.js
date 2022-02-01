import { Fragment, useEffect, useState } from "react";

const FunctionalComponent = ({ name, age }) => {
  const [user, setUser] = useState({
    name: "juan",
    surname: "goblin",
  });

  useEffect(() => {
    console.log("soy un function component en tu consola");
    return () => {
      console.log("voy a ser eliminado");
    };
  }, []);

  const updateState = () => {
    setUser({ ...user, name: "kiki" });
  };

  return (
    <Fragment>
      <h1>Functional Component</h1>

      <div onClick={updateState}>
        <h2>stateName:{user.name}</h2>
        <h2>stateSurname:{user.surname}</h2>
      </div>

      <h2>Nombre:{name}</h2>
      <h2>Edad:{age + 2}</h2>
    </Fragment>
  );
};

export default FunctionalComponent;
