import { useEffect, useState } from 'react';

const Router = ({ path, Component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('navigate', onLocationChange);
    return () => window.removeEventListener('navigate', onLocationChange);
  }, []);
  
  return currentPath === path ? (<Component />) : null;
};

export default Router;
