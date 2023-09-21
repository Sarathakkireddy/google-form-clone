import React, { useContext, useState } from "react";

const AccountContext = React.createContext();

export function useAccountInfo() {
  return useContext(AccountContext);
}

export function AccountProvider({ children }) {
  const [token, setToken] = useState("");
  const [userID, setUserId] = useState("");

  return (
    <AccountContext.Provider
      value={{
        token,
        changeToken: (new_token) => {
          setToken(new_token);
        },
        userID,
        changeUserId: (new_id) => {
          setUserId(new_id);
        },
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
