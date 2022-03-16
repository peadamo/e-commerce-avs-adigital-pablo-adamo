import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../context/UserContext";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CreateUser() {
  const user = useContext(UserContext);

  const [userLog, setUserLog] = useState({
    userName: null,
    password: null,
  });

  const loadDataToServer = () => {
    return new Promise((resolve) => {
      const db = getFirestore();
      const batch = writeBatch(db);
      const usersCollection = collection(db, "users");

      addDoc(usersCollection, {}).then(({ id }) => {
        const docRef = doc(db, "users", `${id}`);
        batch.update(docRef, { ...userLog });
        batch.commit();
        resolve(id);
      });
    });
  };

  const sendUser = async () => {
    const idDelFukingUsuario = await loadDataToServer();
    console.log(idDelFukingUsuario);

    user.logUser({ ...userLog, id: idDelFukingUsuario });
  };

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
      <Link to="/profile">
        <Button onClick={sendUser}>Registrar</Button>
      </Link>
    </Box>
  );
}
