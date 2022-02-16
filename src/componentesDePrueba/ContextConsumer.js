import React from 'react'
import { CartContext } from '../context/CartContext'

const contextConsumer = () => {
  return (
    <div>
        <h1>Souy un fucking Context Consumerrrrrr</h1>
        <CartContext.Consumer>
            {
                (info)=><p>{info}</p>
            }
        </CartContext.Consumer>
    </div>
  )
}

export default contextConsumer  