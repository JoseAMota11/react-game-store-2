import { fetchSomething } from '../../classes/fetch';
import { Pagination } from '../Pagination/Pagination';
import { KEY, URL } from '../../helpers/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../Card/Card';
import { Main } from '../Main/Main';

const pageSize = 20;

export const Container = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

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
        <div className='container'>
          {data.length > 0 && totalCount
            ? data.map((game) => <Card key={game.id} data={game} />)
            : null}
        </div>
      </Main>
      <section className='pagination-container'>
        <Pagination
          className='pagination-bar'
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </>
  );
};
