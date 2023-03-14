import React from 'react';
import PropTypes from 'prop-types';

function Platform({ name }) {
  return <div className="platform-item">{name}</div>;
}

Platform.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Platform;
