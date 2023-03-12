import React from 'react';
import PropTypes from 'prop-types';

function Card({ data }) {
  const {
    background_image: backgroundImage,
    name,
    rating,
    rating_top: ratingTop,
  } = data;

  return (
    <div className="container-card">
      <img className="container-card__image" src={backgroundImage} alt={name} />
      <div className="container-card__info">
        <h3 className="info-name">{name}</h3>
        <span className="info-rating">
          <ion-icon name="star" />
          {rating} / {ratingTop}
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    background_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    rating_top: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
