import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import usePagination from "../../../../customHook/usePagination"

function AmidnPagination({ totalCount, params, onHandleChangePage }) {
  const { _limit, _page } = params
  const totalPage = Math.ceil(totalCount / _limit)
  const rangeWithDots = usePagination(_page, totalPage)

  const onChangePage = item => {
    onHandleChangePage({ ...params, _page: item })
  }

  return (
    <Pagination
      aria-label="Page navigation example"
      className="d-flex justify-content-center"
    >
      <PaginationItem disabled={_page === 1} onClick={() => onChangePage(1)}>
        <PaginationLink first />
      </PaginationItem>
      {rangeWithDots.map((item, index) => (
        <PaginationItem
          key={index}
          onClick={() => onChangePage(item)}
          active={item === _page}
        >
          <PaginationLink href="#">{item}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={_page === totalPage}
        onClick={() => onChangePage(totalPage)}
      >
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  )
}

export default AmidnPagination
