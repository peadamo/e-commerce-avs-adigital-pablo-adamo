import { Link } from "react-router-dom";
import { Card, ListGroupItem, ListGroup, Col, Button } from "react-bootstrap";

const Item = ({ id, name, description, price, imgSrc, stock }) => {
  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={imgSrc} />
          </Link>

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Precio: $ {price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link to={`/item/${id}`}>
              <Button variant="primary">ir a detalle</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">{`Stock disponible ${stock} unidades`}</Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default Item;
