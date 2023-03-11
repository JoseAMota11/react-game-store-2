import { fetchSomething } from '../../classes/fetch';
import { Pagination } from '../Pagination/Pagination';
import { KEY, URL } from '../../helpers/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../Card/Card';
import { Main } from '../Main/Main';
import { Navbar } from '../Navbar/Navbar';
import { Loading } from '../Loading/Loading';
import { Login } from '../Login/Login';

const pageSize = 20;

export const Container = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGames = (async function () {
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
    <>
      <Main>
        <div className='center'>
          <Navbar />
        </div>
        <div className='container'>
          {loading ? (
            <Loading />
          ) : (
            data.map((game) => <Card key={game.id} data={game} />)
          )}
        </div>
        <div className='center'>
          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </Main>
    </>
  );
};
