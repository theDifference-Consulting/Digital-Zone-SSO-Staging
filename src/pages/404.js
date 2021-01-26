import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"
import LibraryAccordion from "../components/libraryAccordion/libraryAccordion"


export default function index() {
  return (
    <>
	<Helmet>
        <title>Gilead Digital Zone — Digital Project Library</title>
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
        <div className="container-fluid library">
            <Navbar activePage='drive-in'/>
            <div className="container" style={{marginTop: "60px", marginBottom: "40%"}}>
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
	        <footer>
	            <div className="container">
	                <div className="copyright">©2020 Gilead</div>
	            </div>
	        </footer>
	        <a href="/" id="back-compass"></a>
	        </div>
	    </main>
    </>
	)
}