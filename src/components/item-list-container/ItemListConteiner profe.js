import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import Item from "../item/Item";



const ItemListContainer = (setSelectedItem) => {
  
  const [products, setProducts] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // getProducts();
    getRickAndMortyCharacter();
  }, []);

  const getRickAndMortyCharacter = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCharacters(false);
    }
  };

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      // setLoading(false);
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  if (loadingCharacters) {
    return <h1>Cargando personajes...</h1>;
  }

  return (
    <div>
      <h1>Lista de productos</h1>
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
      <hr />
      {characters.map(({ id, name, image }) => (
        <Item
          key={id}
          id={id}
          name={name}
          description={`Personaje ${name} con id: ${id}`}
          image={image}
          setSelectedItem={setSelectedItem}
        />
      ))}
      {/* {products.map(({ id, name, description, stock }) => ( */}
    </div>
  );
};

export default ItemListContainer;
