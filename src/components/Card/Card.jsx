export const Card = ({ data }) => {
  const { background_image, name } = data;

  return (
    <div className='card'>
      <img className='card-image' src={background_image} alt={name} />
      <h3 className='card-name'>{name}</h3>
    </div>
  );
};
