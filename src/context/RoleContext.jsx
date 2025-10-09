import { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

export const RoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('student');

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole') || 'student';
    setUserRole(savedRole);
  }, []);

  const setRole = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  return (
    <RoleContext.Provider value={{ userRole, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
