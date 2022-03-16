import {useContext} from "react";
import { UserContext } from "../../../context/UserContext";
import UserFotoCard from "./UserFotoCard";
import UserProfile from "./UserProfile";








const UserProfileContainer = () => {
  const user = useContext(UserContext);


 if(user.user.id==null){
   return<h1>No hay usuario loggeado</h1>
 }


  return (
    <div>
       <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        pt: 2,
                      }}
                    >
                      <LocalShippingOutlinedIcon
                        className={`${styles.greenIcon} `}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <span className={`${styles.greenBold} `}>
                          Envio gratis a todo el país
                        </span>
                        <span className={`${styles.subTitle} `}>
                          Conocé los tiempos y las formas de envío.
                        </span>
                      </Box>
                    </Box>
      <UserFotoCard/>
<UserProfile/>
    </div>
  );
};

export default UserProfileContainer;
