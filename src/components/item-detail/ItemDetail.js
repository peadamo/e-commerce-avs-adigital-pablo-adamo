import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ItemCounter from "../item-cunter/ItemCounter";

const ItemDetail = ({ showProduct }) => {
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
                        <ItemCounter stock={showProduct.stock} />
                      </Card.Body>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Row>
          </Col>
          <Col lg={4}>
            <h1>sd</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
