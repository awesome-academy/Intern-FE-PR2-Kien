import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  totalCountSelector,
  paramsSelector,
  changeParams
} from "../../../../app/adminSlice"

function AmidnPagination(props) {
  const dispatch = useDispatch()
  const totalCount = useSelector(totalCountSelector)
  const params = useSelector(paramsSelector)
  const { _limit, _page } = params
  const totalPage = Math.ceil(totalCount / _limit)

  const arr = pagination(_page, totalPage)

  function pagination(c, m) {
    var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i)
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1)
        } else if (i - l !== 1) {
          rangeWithDots.push("...")
        }
      }
      rangeWithDots.push(i)
      l = i
    }

    return rangeWithDots
  }

  const onHandleChangePage = item => {
    dispatch(changeParams({ ...params, _page: item }))
  }

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem
        disabled={_page == 1}
        onClick={() => dispatch(changeParams({ ...params, _page: 1 }))}
      >
        <PaginationLink first />
      </PaginationItem>
      {arr.map((item, index) => (
        <PaginationItem
          key={index}
          onClick={() => onHandleChangePage(item)}
          active={item === _page}
        >
          <PaginationLink href="#">{item}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={_page == totalPage}
        onClick={() => dispatch(changeParams({ ...params, _page: totalPage }))}
      >
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  )
}

export default AmidnPagination
