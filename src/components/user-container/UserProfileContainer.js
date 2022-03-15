import {useContext} from "react";
import { UserContext } from "../../context/UserContext";
import FileUpload from "../fileUpload/FileUpload";

const UserProfileContainer = () => {
  const user = useContext(UserContext);


 if(user.user==null){
   return<h1>No hay usuario loggeado</h1>
 }


  return (
    <div>
      <p>nombre usuario</p>
      <p>{user.user.userName}</p>

      <hr/>
      <p>mail usuario</p>
      <p>{user.user.password}</p>

      <hr/>
      <hr/>
      <p>id usuario</p>
      <p>{user.user.id}</p>

      <hr/>

      <FileUpload/>
    </div>
  );
};

export default UserProfileContainer;
