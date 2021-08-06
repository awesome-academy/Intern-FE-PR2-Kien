import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  totalCountSelector,
  paramsSelector,
  changeParams
} from "../../../../app/adminSlice"
import usePagination from "../../../../customHook/usePagination"

function AmidnPagination(props) {
  const dispatch = useDispatch()
  const totalCount = useSelector(totalCountSelector)
  const params = useSelector(paramsSelector)
  const { _limit, _page } = params
  const totalPage = Math.ceil(totalCount / _limit)

  const rangeWithDots = usePagination(_page, totalPage)

  const onHandleChangePage = item => {
    dispatch(changeParams({ ...params, _page: item }))
  }

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem
        disabled={_page === 1}
        onClick={() => dispatch(changeParams({ ...params, _page: 1 }))}
      >
        <PaginationLink first />
      </PaginationItem>
      {rangeWithDots.map((item, index) => (
        <PaginationItem
          key={index}
          onClick={() => onHandleChangePage(item)}
          active={item === _page}
        >
          <PaginationLink href="#">{item}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={_page === totalPage}
        onClick={() => dispatch(changeParams({ ...params, _page: totalPage }))}
      >
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  )
}

export default React.memo(AmidnPagination)
