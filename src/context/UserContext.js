import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

const logUser=(userId)=>{
  setUser(userId)
}


  return (
    <UserContext.Provider
      value={{ user,logUser}}
    >
      {children}
    </UserContext.Provider>
  );
};
