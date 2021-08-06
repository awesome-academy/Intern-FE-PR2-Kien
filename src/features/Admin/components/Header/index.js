import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const HeaderAdmin = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">Admin page</NavbarBrand>
        </div>
      </Navbar>
    </div>
  )
}

export default HeaderAdmin
