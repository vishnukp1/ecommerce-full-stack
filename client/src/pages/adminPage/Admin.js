import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <Navbar bg="light" className="navbar" variant="light">
          <Container>
            <div className="navimg">
              <img
                src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
                width="100"
                height="100"
                className="d-inline-block align-top "
                alt="React Bootstrap logo"
                onClick={() => navigate("/")}
              />
            </div>

            <Navbar.Brand onClick={() => navigate("/")}>Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/adminpage/adminproduct")}>
                All Product
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/adminpage/adminuser")}>
                User Details
              </Nav.Link>

              {/* <Nav.Link onClick={() => navigate("/searchpage")}>Search Page</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </div>
  );
}

export default Admin;
