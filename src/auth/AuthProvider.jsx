import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(); // Fixed typo: 'AuthContaxt' -> 'AuthContext'

// Dummy user data
const demoUser = {
  id: 1,
  name: "John Doe",
  role: "admin",
  email: "john.doe@example.com",
  address: "123 Main St, New York, NY 10001",
  phone: "+1 (123) 456-7890",
  projectAssign: 3,
  image: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Start with no user
  const [loading, setLoading] = useState(true); // Simulate loading state

  // Check local storage for existing user
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser)); // If user exists in local storage, update state
    }
    setLoading(false); // Loading complete
  }, []);

  // Simulate login function
  const login = () => {
    localStorage.setItem("authUser", JSON.stringify(demoUser));
    setUser(demoUser); // Set user in state
    console.log(user);
  };

  // Simulate logout function
  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null); // Clear user from state
  };

  const authInformation = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInformation}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
