import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ItemCounter from "../item-cunter/ItemCounter";
import { Link } from "react-router-dom";
import CartConteiner from "../cart/CartConteiner";

const ItemDetail = ({ showProduct }) => {
  const [totalToAdd, setTotalToAdd] = useState(null);
  const [cardFoot, setCardFoot] = useState(null);

  useEffect(() => {
    if (totalToAdd > 0) {
      setCardFoot(
        <>
          <Card.Text>Agregaste {totalToAdd} unidades al carrito</Card.Text>
          <Link to="/cart">
            <button>Terminar mi compra</button>
          </Link>
        </>
      );
    } else {

      setCardFoot(

        <ItemCounter
        stock={showProduct.stock}
        setTotalToAdd={setTotalToAdd}
        item={{ ...showProduct }}
      />
  

      );



    }
  }, [totalToAdd,showProduct]);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={8}>
            <Row>
              <Card>
                <Card.Header>
                  <Card.Title>
                    {` Producto:  ${showProduct.description} - ${showProduct.name} `}{" "}
                  </Card.Title>
                </Card.Header>

                <Container>
                  <Row>
                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={showProduct.imgSrc} />
                      </Card>
                    </Col>

                    <Col>
                      <Card.Body>
                        <Card.Title>
                          {" "}
                          Stock disponible {showProduct.stock}
                        </Card.Title>
                        <Card.Text>Precio: $ {showProduct.price}</Card.Text>
             
                        {cardFoot}
                      </Card.Body>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Row>
          </Col>
          <Col lg={4}>
            <CartConteiner />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
