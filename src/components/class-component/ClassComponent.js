import { Component } from 'react';


export class ClassComponent extends Component {



    render() {
        const { name, age } = this.props

        return (
            <>
                <h1>Class Component</h1>
                <h2>Nombre:{name}</h2>
                <h2>Edad:{age}</h2>
            </>
        )
    }
}