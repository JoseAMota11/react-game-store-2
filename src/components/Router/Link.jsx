import React from 'react';
import PropTypes from 'prop-types';

function Link({ to, className, children }) {
  const preventReload = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', to);
    const navigationEvent = new PopStateEvent('navigate');
    window.dispatchEvent(navigationEvent);
  };

  return (
    <a className={className} href={to} onClick={preventReload}>
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
