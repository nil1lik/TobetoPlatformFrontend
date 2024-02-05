import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

type Props = {
  handleChildStateChange: (pageNumber: number) => void,
};

const Pagi = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = 2; // Toplam sayfa sayısı

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    props.handleChildStateChange(pageNumber-1);
    // Burada sayfa değişimine göre başka bir işlem yapabilirsiniz
  };

  return (
    <Pagination>
      <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />

      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}

      <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
    </Pagination>
  );
};

export default Pagi;
