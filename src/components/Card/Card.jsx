import React from 'react';
import PropTypes from 'prop-types';

function Card({ data, setSinglePage, setGameExactName, setGameId }) {
  const {
    background_image: backgroundImage,
    name,
    rating,
    rating_top: ratingTop,
    id
  } = data;

  const handleClick = () => {
    setSinglePage(true);
    setGameId(id)
    setGameExactName(name);
  };

  return (
    <div className="container-card" onClick={handleClick}>
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
    background_image: PropTypes.string,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    rating_top: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setSinglePage: PropTypes.func.isRequired,
  setGameExactName: PropTypes.func.isRequired,
  setGameId: PropTypes.func.isRequired,
};

export default Card;
