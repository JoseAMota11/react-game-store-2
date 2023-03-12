import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../helpers/classnames';
import { DOTS } from '../../helpers/constants';
import usePagination from '../../hooks/usePagination';

function Pagination({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  className,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div
      className={classnames('pagination-container', { [className]: className })}
    >
      <button
        type="button"
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <ion-icon name="chevron-back-outline" />
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <button type="button" className="pagination-item dots">
              &#8230;
            </button>
          );
        }
        return (
          <button
            type="button"
            key={pageNumber}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        type="button"
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <ion-icon name="chevron-forward-outline" />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Pagination;
