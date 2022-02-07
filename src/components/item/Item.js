

import { Card, ListGroupItem, ListGroup, Col,Button } from "react-bootstrap";

const Item = ({ id, name, description,price, changeSelectedItem, imgSrc }) => {
 


  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgSrc} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Precio: $ {price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
        
            <Button variant="primary" onClick={changeSelectedItem({ id, name, description,price, changeSelectedItem, imgSrc })}>
              Seleccionar producto
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Item;
