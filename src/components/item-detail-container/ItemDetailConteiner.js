import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import { useParams } from "react-router-dom";
import ItemDetail from "../item-detail/ItemDetail";

const ItemDetailConteinerClase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showProduct, setShowProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProducts();
    setShowProduct(products.filter((product) => product.id === id)[0])
  }, [id, products]);

  // console.log("soy un console log suelto por ahi")

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      // console.log("Finalización del consumo de la API productsAPI");
    }
  };

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
