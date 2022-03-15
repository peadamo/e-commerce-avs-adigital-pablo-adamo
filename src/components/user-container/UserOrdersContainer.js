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
  }, []);

  if(user.user==null){
    return<h1>No hay usuario loggeado</h1>
  }
  return (
    <div>
      <h1>soy una tabla con lasd orfdseness</h1>

      {orders &&orders.map((order) => (
          <UserOrderTable key={order.id} {...order} />
        ))}
 {orders && console.log(orders)}


    </div>
  );
};

export default UserOrdersContainer;
