import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { Box, Button, Stack, TextField } from "@mui/material";
import { getFirestore, doc, writeBatch } from "firebase/firestore";
const UserProfile = () => {
  const user = useContext(UserContext);

  const [userInfo, setuserInfo] = useState({
    name: null,
    email: null,
    adress: null,
    phone: null,
    imgSrc: user.user.imgSrc!==undefined ?user.user.imgSrc:null
  });

  const saveUserInfo = () => {
    user.logUser({ ...user.user, ...userInfo });

    const db = getFirestore();
    const batch = writeBatch(db);
    const docRef = doc(db, "users", user.user.id);

    batch.update(docRef, { ...userInfo });

    batch.commit();
  };

  return (
  <Box>
        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={0}
        >
          <TextField
            variant="standard"
            id="standard-basic"
            label="Nombre"
            defaultValue={user.user.name}
            onChange={(e) => setuserInfo({ ...userInfo, name: e.target.value })}
          />
          <TextField
            variant="standard"
            id="standard-basic"
            label="Email"
            defaultValue={user.user.email}

            onChange={(e) =>
              setuserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <TextField
            variant="standard"
            id="standard-basic"
            label="Direccion"
            defaultValue={user.user.adress}

            onChange={(e) =>
              setuserInfo({ ...userInfo, adress: e.target.value })
            }
          />
          <TextField
            variant="standard"
            id="standard-basic"
            label="Telefono"
            defaultValue={user.user.phone}

            onChange={(e) =>
              setuserInfo({ ...userInfo, phone: e.target.value })
            }
          />
          <hr></hr>
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            saveUserInfo();
          }}
        >
          Guardar Datos
        </Button>
        </Box>
     
  );
};

export default UserProfile;
