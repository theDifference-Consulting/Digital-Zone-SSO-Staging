import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo, ...props }) => {
  return (
    <>
        <Nav className="navbar" activeKey={props.activePage}>
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
          </div>
          <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                  <li>
                    <Link to="/" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span">
                        Home
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                  <Link to="/visitor-centre/" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="visitor-centre">
                        Visitor Info
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                  <Link to="/podcast-alley/" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="podcast-alley">
                        Podcast Alley
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                    <Link to="/qr-castle/" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="qr-castle">
                        QR Castle
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                    <Link to="/drive-in/" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="drive-in">
                        Drive-Innovation Theater
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                  <Link to="/news/" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="news">
                        News
                      </Nav.Link>
                    </Link>
                  </li>
              </ul>
          </div>
        </Nav>
    </>
  )
}

export default CustomNavbar