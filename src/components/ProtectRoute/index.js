import React from "react"
import { Redirect, Route } from "react-router-dom"

function ProtectedRoute({
  isAuthenticated,
  component: Component,
  ...restOfProps
}) {
  return (
    <Route
      {...restOfProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default ProtectedRoute
