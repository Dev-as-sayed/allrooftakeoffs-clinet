/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const isAdmin = () => {
  const { user } = useContext(AuthContext);

  let isAdmin = false;
  if (user?.role === "Admin") {
    isAdmin = true;
  } else {
    return isAdmin;
  }
};

export default isAdmin;
