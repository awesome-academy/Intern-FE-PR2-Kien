import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { newSelector, getNew } from "../../../../app/userSlice"
import { useParams } from "react-router-dom"

function NewPage(props) {
  const dispatch = useDispatch()
  const listDetailNew = useSelector(newSelector)
  const detailNew = listDetailNew[0]
  const params = useParams()
  const { id } = params
  useEffect(() => {
    dispatch(getNew({ id: id }))
  }, [dispatch, id])
  return (
    <div>
      <div className="container p-5">
        {detailNew && (
          <div>
            <h1>{detailNew.title}</h1>
            <div className="row">
              <div className="col-8">{detailNew.content}</div>
              <div className="col-4">
                <img className="w-100" src={detailNew.avatar} alt="avatar" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewPage
