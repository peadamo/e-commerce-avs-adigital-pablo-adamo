import { useState } from "react";
import ItemCounter from "../function-component/ItemCount";
import { Card, ListGroupItem, ListGroup, Col,Button } from "react-bootstrap";

const Item = ({ id, name, description, stock, setSelectedItem, imgSrc }) => {
  const [sotckSelected, setSotckSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, name, description, stock: sotckSelected, imgSrc });

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
            <ListGroupItem>Stock: {stock}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <ItemCounter stock={stock} setSotckSelected={setSotckSelected} />
            <Button variant="primary" onClick={selectItem}>
              Seleccionar producto
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Item;
