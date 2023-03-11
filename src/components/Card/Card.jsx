export const Card = ({ data }) => {
  const { background_image, name, rating, rating_top } = data;

  return (
    <div className='container-card'>
      <img
        className='container-card__image'
        src={background_image}
        alt={name}
      />
      <div className="container-card__info">
        <h3 className='info-name'>{name}</h3>
        <span className='info-rating'>
          <ion-icon name='star'></ion-icon>
          {rating} / {rating_top}
        </span>
      </div>
    </div>
  );
};
