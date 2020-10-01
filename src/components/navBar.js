import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo, ...props }) => {
  return (
    <>
        <Nav className="navbar" activeKey={props.activePage}>
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
          </div>
          <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                  <li>
                    <Link to="/" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span">
                        Home
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                  <Link to="/visitor-centre.html" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="visitor-centre">
                        Visitor Info
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                  <Link to="/podcast-alley.html" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="podcast-alley">
                        Podcast Alley
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                    <Link to="/qr-castle.html" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="qr-castle">
                        QR Castle
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                    <Link to="/drive-in.html" className="link-no-style" activeClassName="active">
                      <Nav.Link as="span" eventKey="drive-in">
                        Drive-Innovation Theater
                      </Nav.Link>
                    </Link>
                  </li>
                  <li>
                  <Link to="/news.html" className="link-no-style" activeClassName="active">
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