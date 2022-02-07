import { React, useState, useEffect } from "react";
import ItemListContainer from "../item-list-container/ItemListConteiner";
import ItemDetailContainer from "./ItemDetailContainer";

const ProductView = () => {
  const [pageView, setPageView] = useState(<ItemListContainer />);
  const [selectedItem, setSelectedItem] = useState(null);

  const changePage = () => {
    selectedItem == null
      ? setPageView(
          <ItemListContainer changeSelectedItem={changeSelectedItem} />
        )
      : setPageView(
        
          <ItemDetailContainer
            changeSelectedItem={changeSelectedItem}
            product={selectedItem}
          />
        );
  };
  useEffect(() => {
    changePage();
  }, [selectedItem]);

  const changeSelectedItem = (item) => {
    return function () {
      setSelectedItem(item);
    };
  };


  return <div>{pageView}</div>;
};

export default ProductView;
