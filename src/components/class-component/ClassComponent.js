import { Component, Fragment } from "react";

export class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Juan",
      surname:"perez",
    };
  }

  upDateName = () => {
    this.setState({ name: "leo" });
  };

  render() {
    const { name, age } = this.props;

    return (
      <>
        <h1>Class Component</h1>
        <div onClick={this.upDateName}>
          <h2>Nombre del estado:{this.state.name}</h2>
        </div>
        <div onClick={this.upDateName}>
          <h2>Nombre del estado:{this.state.surname}</h2>
        </div>
        <h2>Nombre:{name}</h2>
        <h2>Edad:{age}</h2>
      </>
    );
  }
}
