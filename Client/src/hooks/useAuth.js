import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('http://localhost:5000/api/users/profile', {
        method: 'GET',
        credentials: 'include', 
      });
      setIsAuthenticated(response.ok);
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;
