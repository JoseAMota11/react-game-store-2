import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comments, userId, userName }) {

  return <section>
    <h3>{userName}</h3>
    {comments}
  </section>;
}

Comment.propTypes = {
  comments: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  userName: PropTypes.number.isRequired
};

export default Comment;
