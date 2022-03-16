import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserLogIn() {
  const user = useContext(UserContext);

  const [userLog, setUserLog] = useState({
    userName: null,
    password: null,
  });

  const [validatedUser, setValidatedUser] = useState(null);

  const valideteUser = () => {
    const db = getFirestore();
    const itemsCollection = query(
      collection(db, "users"),
      where("userName", "==", `${userLog.userName}`),
      where("password", "==", `${userLog.password}`)
    );

    getDocs(itemsCollection).then((snapShot) => {
      let usersList = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if(usersList.length>0){user.logUser({...usersList[0]})
    }
      setValidatedUser(usersList);
    });
  };


  if(validatedUser && validatedUser.length>0){
    return <Navigate to="/"/>}
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue=""
          onChange={(e) => setUserLog({ ...userLog, userName: e.target.value })}
        />
        <TextField
          required
          id="outlined-required"
          label="Contraseña"
          defaultValue=""
          onChange={(e) => setUserLog({ ...userLog, password: e.target.value })}
        />
      </div>

      {/* {validatedUser && <h5>usuario o contraseña incorrecto</h5>} */}

      {validatedUser && <h5>usuario o contraseña incorrecto</h5>}

      

      <Link to="">
        <Button onClick={valideteUser}>Ingresar</Button>
      </Link>
    </Box>
  );
}
