import { Component } from 'react';
import { alignPropType } from 'react-bootstrap/esm/types';

export class ClassComponent extends Component {
    
    
    
    render() {
const {name,age}=this.props

        return (
            <div>
                <h1>Class Component</h1>
                <h2>Nombre:{name}</h2>
                <h2>Edad:{age}</h2>
            </div>
        )
    }
}