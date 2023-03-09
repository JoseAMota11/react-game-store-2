export const Card = ({ data }) => {
  const { background_image, name } = data;

  return (
    <div className='container-card'>
      <img
        className='container-card__image'
        src={background_image}
        alt={name}
      />
      <h3 className='container-card__name'>{name}</h3>
    </div>
  );
};
