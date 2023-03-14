import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comments, userId, userName }) {
  const noComment = 'No comments. Be the fist in commenting something.';
  const noUser = 'You need to be logged in for making comments.';
  return (
    <section className="comment">
      <textarea className="comment-field" placeholder='Type a comment' />
      <button className='comment-button' type="button" disabled={!userId}>
        Comment
      </button>
      {!comments ? (
        <span>{userId ? noComment : noUser}</span>
      ) : (
        <div className="comment-container">
          <h3 className="comment-container__user">{userName}</h3>
          <p className="comment-container__text">{comments}</p>
        </div>
      )}
    </section>
  );
}

Comment.propTypes = {
  comments: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  userName: PropTypes.number.isRequired,
};

export default Comment;
