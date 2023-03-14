import React, { useEffect, useState } from 'react';
import { fetchSomething } from '../../classes/fetch';
import Pagination from '../Pagination/Pagination';
import { KEY, URL } from '../../helpers/constants';
import Card from '../Card/Card';
import Main from '../Main/Main';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import SinglePage from '../SinglePage/SinglePage';

const pageSize = 20;

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [singlePage, setSinglePage] = useState(false);
  const [gameExactName, setGameExactName] = useState(null);
  const [gameId, setGameId] = useState(null);

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
        page_size: pageSize,
        page: currentPage,
      };

      setLoading(true);
      const result = await fetchSomething.get(URL, req, options);
      setTotalCount(result.count);
      setData(result.results);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setLoading(false);
    })();
  }, [currentPage]);

  return (
    <div>
      {!singlePage ? (
        <Main>
          <div className="center">
            <Navbar setData={setData} setTotalCount={setTotalCount} />
          </div>
          <div className="container">
            {loading ? (
              <Loading />
            ) : (
              data.map((game) => (
                <Card
                  setSinglePage={setSinglePage}
                  setGameExactName={setGameExactName}
                  key={game.id}
                  data={game}
                  setGameId={setGameId}
                />
              ))
            )}
          </div>
          <div className="center">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
              siblingCount={1}
            />
          </div>
        </Main>
      ) : (
        <SinglePage gameExactName={gameExactName} gameId={gameId} />
      )}
    </div>
  );
}

export default Home;
