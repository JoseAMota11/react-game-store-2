import { fetchSomething } from '../../classes/fetch';
import { Pagination } from '../Pagination/Pagination';
import { KEY, URL } from '../../helpers/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../Card/Card';
import { Main } from '../Main/Main';
import { Navbar } from '../Navbar/Navbar';

const pageSize = 20;

export const Container = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage]);

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

      const result = await fetchSomething.get(URL, req, options);
      setTotalCount(result.count);
      setData(result.results);
    })();
  }, [currentPage]);

  return (
    <>
      <Main>
        <Navbar />
        <div className='container'>
          {data.length > 0 && totalCount
            ? data.map((game) => <Card key={game.id} data={game} />)
            : null}
        </div>
        <Pagination
          className='pagination-bar'
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Main>
    </>
  );
};
