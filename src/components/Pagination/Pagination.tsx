import React from 'react'
import { Pagination } from 'react-bootstrap'

type Props = {}

const Paginations = (props: Props) => {
  return (
        <Pagination>
            <Pagination.Prev className="pagi-prev" />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next className="pagi-next" />
        </Pagination>
  )
}

export default Paginations;