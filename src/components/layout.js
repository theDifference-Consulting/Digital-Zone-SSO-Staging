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

const Layout = ({ pageName, containerClass, activePage, children }) => {
console.log(pageName)
  return (
    <>
    	<Helmet>
	      <title>Gilead Digital Zone — {pageName}</title>
	      <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css"/>
	      <link rel="stylesheet" type="text/css" href="../css/style.css"/>
	      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
	      <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
	  		<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
	      <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
	      <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
	      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript" />
	      <script src="../js/bootstrap.min.js" type="text/javascript" />
		  </Helmet>
      <main className="secondary-template">
      	<div className={"container-fluid " + containerClass}>
          <Navbar activePage={activePage}/>
            <header>
				      <div className="">
				          <div className="heading-cloud-wrapper">
				              <h1>{pageName}</h1>
				          </div>
				      </div>
				  	</header>
          {children}
        </div>
        <footer>
	          <div className="container">
	              <div className="copyright">©2021 Gilead</div>
	          </div>
		      </footer>
		      <a href="/" id="back-compass"></a>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout