import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../item-detail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const ItemDetailConteinerClase = () => {
  const [loading, setLoading] = useState(true);
  const [showProduct, setShowProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", `${id}`);

    getDoc(docRef).then((snapShot) => {
      setShowProduct({ id: snapShot.id, ...snapShot.data() });
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <ItemDetail showProduct={showProduct} />
    </>
  );
};

export default ItemDetailConteinerClase;
