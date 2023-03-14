import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Comment from './components/Comment/Comment';
import { KEY, URL } from '../../helpers/constants';
import { fetchSomething } from '../../classes/fetch';
import Loading from '../Loading/Loading';
import Platform from './components/Platform/Platform';

function SinglePage({ gameExactName, gameId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getGames() {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const req = {
        key: KEY,
        search: gameExactName,
      };

      setLoading(true);
      const result = await fetchSomething.get(URL, req, options);
      const gottenResult = result.results.filter((game) => game.id === gameId);
      setData(gottenResult);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="single-page">
      {loading && data.length > 0 ? (
        <Loading />
      ) : (
        <div className="single-page-container">
          {data.map(
            ({
              id,
              name,
              background_image: backgroundImage,
              platforms,
              rating,
            }) => (
              <div key={id}>
                <h3 className="single-page-name">{name}</h3>
                <img
                  className="single-page-image"
                  src={backgroundImage}
                  alt={name}
                />
                <h3 className='single-page-platform'>Platforms</h3>
                <span className='single-page-rating'>Rating: {rating}</span>
                {platforms.map(({ platform }) => (
                  <Platform name={platform.name} />
                ))}
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}

SinglePage.propTypes = {
  gameExactName: PropTypes.string.isRequired,
  gameId: PropTypes.number.isRequired,
};

export default SinglePage;
