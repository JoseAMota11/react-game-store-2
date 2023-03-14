import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Comment from './components/Comment/Comment';
import { KEY, URL } from '../../helpers/constants';
import { fetchSomething } from '../../classes/fetch';
import Loading from '../Loading/Loading';
import Platform from './components/Platform/Platform';

function SinglePage({ setSinglePage, gameExactName, gameId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const user = JSON.parse(localStorage.getItem('user'));

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

      const result = await fetchSomething.get(URL, req, options);
      const gottenResult = result.results.filter((game) => game.id === gameId);
      setData(gottenResult);
      setLoading(false);
    })();
  }, []);

  const handleClick = () => {
    setSinglePage(false);
  };

  return (
    <section className="single-page">
      {loading && data.length < 1 ? (
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
                <button onClick={handleClick} type="button" className="back">
                  Back
                </button>
                <img
                  className="single-page-image"
                  src={backgroundImage}
                  alt={name}
                />
                <span className="single-page-rating">Rating: {rating}</span>
                <h3 className="single-page-platform">Platforms</h3>
                {platforms.map(({ platform }) => (
                  <Platform key={platform.name} name={platform.name} />
                ))}
                <Comment comments="" userId="" userName="" />
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
  setSinglePage: PropTypes.func.isRequired,
};

export default SinglePage;
