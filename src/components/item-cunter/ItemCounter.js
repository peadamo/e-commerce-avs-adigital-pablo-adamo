import React, {  useState } from "react";

import { Button, Container,Row,Col } from "react-bootstrap";

const ItemCounter = ({ stock }) => {
  const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setSotckSelected(counter);
//   }, [counter]);

  

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
          <Container>
<Row className="justify-content-md-center">
    <Col lg={1} ><Button variant="primary" size="sm"onClick={minusCounter}>-</Button></Col>
    <Col lg="auto" ><span>{counter}</span></Col>
    <Col lg={1} ><Button variant="primary" size="sm"onClick={plusCounter}>+</Button></Col>
</Row>

          </Container>

      

   
        
        
       
      </div>
    </>
  );
};

export default ItemCounter;