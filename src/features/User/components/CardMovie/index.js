import React from "react"
import { Link, useRouteMatch } from "react-router-dom"
import { Card, CardBody, CardTitle } from "reactstrap"

const CardMovies = ({ movie }) => {
  const { path } = useRouteMatch()
  return (
    <div>
      <Card className="text-center">
        <img className="w-100" src={movie.avatar} alt="movie-avatar" />
        <CardBody>
          <CardTitle tag="h5">{movie.name}</CardTitle>
          <Link
            className="btn btn-secondary"
            to={{
              pathname: `${path}/movie`,
              search: `?id=${movie.id}`
            }}
          >
            Mua vé
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardMovies
