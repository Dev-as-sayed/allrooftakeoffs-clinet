import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/AxiosPublic/useAxiosPublic";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Simulate loading state
  const axiosPublic = useAxiosPublic(); // Use axios instance for secure requests
  // const navigate = useNavigate();

  // Check local storage for existing user
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    const token = localStorage.getItem("authToken");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser)); // Set user if found in local storage
    }
    setLoading(false); // Loading complete
  }, []);

  // Login function with backend integration
  const login = async ({ email, password }) => {
    const response = await axiosPublic
      .post("/login", { email, password })
      .then((res) => {
        if (res.data.success) {
          const { user, token } = res.data.data;

          // Store the user and token in localStorage
          localStorage.setItem("authUser", JSON.stringify(user));
          localStorage.setItem("authToken", token);

          // Update state with user data
          setUser(user);
        } else {
          // Show alert if login fails
          alert(`Login failed: ${response.data.message}`);
        }
      });
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
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
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <p className="text-center">Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
