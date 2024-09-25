import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContaxt } from "../auth/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContaxt);

  //   if (!loading) {
  //     return (
  //       <div className="h-screen flex justify-start items-center">
  //         <p className="text-center">Loading</p>
  //       </div>
  //     );
  //   }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
