import { Spinner, useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const PrivateRoute = ({ children, text }) => {
  const { auth } = useContext(AuthContext);
  const toast = useToast();
  const myNavi = useNavigate();

  if (!auth) {
    toast({
      title: "Redirecting...",
      description: "Please Login First.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(()=>{
      myNavi("/auth")
    },3000);
    return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blackAlpha.900" size="xl" />;
  }
  return children;
};

export default PrivateRoute;
