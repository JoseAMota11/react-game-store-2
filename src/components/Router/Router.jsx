import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Router({ path, Component }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('navigate', onLocationChange);
    return () => window.removeEventListener('navigate', onLocationChange);
  }, []);

  return currentPath === path ? <Component /> : null;
}

Router.propTypes = {
  path: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
};

export default Router;
