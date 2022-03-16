import { Box, Container } from "@mui/material";
import {useContext} from "react";
import { UserContext } from "../../../context/UserContext";
import FileUpload from "../../fileUpload/FileUpload";
import UserFotoCard from "./UserFotoCard";
import UserProfile from "./UserProfile";








const UserProfileContainer = () => {
  const user = useContext(UserContext);


 if(user.user.id==null){
   return<h1>No hay usuario loggeado</h1>
 }


  return (
    <Container>
       <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        pt: 2,
                      }}
                    >
                    

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <UserFotoCard/>
                        <FileUpload/>
                      </Box>
                      <UserProfile/>
                    </Box>
      

    </Container>
  );
};

export default UserProfileContainer;
