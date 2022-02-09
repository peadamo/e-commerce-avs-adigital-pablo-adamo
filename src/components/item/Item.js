
import {Link} from "react-router-dom"
import { Card, ListGroupItem, ListGroup, Col,Button } from "react-bootstrap";

const Item = ({ id, name, description,price,  imgSrc }) => {
 


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
        
            <Button variant="primary" >
              Seleccionar producto
            </Button>
            <hr></hr>
            <Link to={`/item/${id}`} >ir a detalle</Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Item;
