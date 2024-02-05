import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import "./Pagination.css"

type Props = {
  handleChildStateChange: (pageNumber: number) => void;
  pageCount: number;
};

const Pagi = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = props.pageCount; // Toplam sayfa sayısı

  const handlePageChange = (totalPages: number): void => {
    setCurrentPage(totalPages);
    props.handleChildStateChange(totalPages - 1);
    // Burada sayfa değişimine göre başka bir işlem yapabilirsiniz
  };

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() =>
          handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)
        }
      />

      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() =>
          handlePageChange(
            currentPage < totalPages ? currentPage + 1 : currentPage
          )
        }
      />
    </Pagination>
  );
};

export default Pagi;
