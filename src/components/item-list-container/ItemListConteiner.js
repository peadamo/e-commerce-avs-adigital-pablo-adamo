import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import { useParams } from "react-router-dom";
import Item from "../item/Item";
import {
  getFirestore,

  collection,
  getDocs,
  query,
  where,

} from "firebase/firestore";
const ItemListContainer = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    if (!id) {
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapShot) => {
        setLoading(false);
        setProducts(
          snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } else {
      const itemsCollection = query(
        collection(db, "items"),
        where("category", "==", `${id}`)
      );
      getDocs(itemsCollection).then((snapShot) => {
        setLoading(false);
        setProducts(
          snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        <br />
        <br /> <h1>Cargando...</h1>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      <Container>
        <Row>
          {products.map((product) => (
            <Item key={product.id} {...product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;
