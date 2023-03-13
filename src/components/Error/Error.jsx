import React from 'react';
import PropTypes from 'prop-types';

function Error({ errorMessage, className }) {
  return <span className={className}>{errorMessage}</span>;
}

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Error;
