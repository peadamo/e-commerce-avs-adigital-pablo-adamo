import { useEffect, useState,useContext } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { UserContext } from "../../context/UserContext";

import UserOrderTable from "./user-orders-container/UserOrderTable";

const UserOrdersContainer = () => {
  const [orders, setOrders] = useState(null);
  const user = useContext(UserContext);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = query(
      collection(db, "orders"),
      where("buyer.userId", "==", `${user.user.id}`)
    );



    getDocs(itemsCollection).then((snapShot) => {
      setOrders(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [user.user.id]);

  if(user.user.id==null){
    return<h1>No hay usuario loggeado</h1>
  }
  return (
    <div>
      <h1>Pedidos Realizados</h1>
      <hr/>

      {orders &&orders.map((order) => (
          <UserOrderTable key={order.id} {...order} />
        ))}


    </div>
  );
};

export default UserOrdersContainer;
