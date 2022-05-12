import React, { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  stdlogin: "",
  login: (token) => {},
  logout: () => {},
  stdlogin: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, settoken] = useState(null);
  const [stdlogin, setstdlogin] = useState(null);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    settoken(token);
  };
  const stdloginHandler = () => {
    setstdlogin(localStorage.getItem("std_jwt_token"));
  };
  const logoutHandlr = () => {
    settoken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    localStorage: logoutHandlr,
    stdlogin: stdlogin
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
