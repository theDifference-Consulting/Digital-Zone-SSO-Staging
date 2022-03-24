/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Navbar from "../components/navBar"
import { LilCubes } from "../components/lilCubes"
import "animate.css/animate.min.css"
import { Container, Row } from "react-bootstrap"
import LottiePlayer from "./lottiePlayer";
import compass from "../anim/compass.json";

const Layout = ({ pageName, containerClass, activePage, children }) => {
  return (
    <>
      <Helmet>
        <title>Gilead Digital Zone — {pageName}</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,400,900&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
      </Helmet>
      <main className="secondary-template">
      	<Container fluid className={`${containerClass} overflow-hidden`}>
          <Row>
            <Navbar activePage={activePage}/>
          </Row>
          <Row>
            <header>
              <div className="d-none d-md-block">
                <div className="cloud cloud--small" style={{ bottom: "85px", left: "calc(9vw + 105px)"}}></div>
                <div className="cloud cloud--small" style={{ bottom: "35px", left: "9vw" }}></div>
              </div>
              <div className="heading-cloud-wrapper">
                <h1>
                  {pageName}
                  <LilCubes left="-8px" top="-8px" />
                  <LilCubes left="-12px" bottom="-10px" />
                  <LilCubes right="20px" top="-8px" />
                  <LilCubes right="-6px" bottom="-10px" />
                  <div className="heading__down-tag"></div>
                </h1>
                <div className="cloud" style={{ top: 0, right: "85px"}}></div>
                <div className="cloud" style={{ left: "-70px", top: "calc(50% - 112.02px/2 + 19.01px)"}}></div>
              </div>
              <div className="header-fade"></div>
            </header>
          </Row>
          {children}
        </Container>
        <footer className="d-flex justify-content-center align-items-center">
          <div className="copyright">©2022 Gilead</div>
        </footer>
        <a href="/" id="back-compass" aria-label="back button">
					<LottiePlayer animData={compass} playOnHover={true} noloop />
        </a>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
