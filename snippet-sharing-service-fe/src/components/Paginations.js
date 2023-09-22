import React from 'react'
import { Pagination } from 'react-bootstrap';

export default function Paginations({totalItems, paginate}) {
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(totalItems/10); i++ ){
      pageNumbers.push(
        <Pagination.Item key={i}  onClick={() => paginate(i)}>
          {i}
        </Pagination.Item>
      );
    }

  return (
    <>
      <Pagination className="d-flex justify-content-center mt-5 itemPagination">{pageNumbers}</Pagination>
    </>
  )
}