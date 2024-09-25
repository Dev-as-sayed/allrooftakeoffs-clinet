import { createContext, useState } from "react";

export const AuthContaxt = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const authInformation = { user, loading };

  return (
    <AuthContaxt.Provider value={authInformation}>
      {children}
    </AuthContaxt.Provider>
  );
};

export default AuthProvider;
