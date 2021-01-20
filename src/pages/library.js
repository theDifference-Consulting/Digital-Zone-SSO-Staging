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
            <header>
                <div className="container">
                    <div className="heading-cloud-wrapper row">
                        <h1>Digital Project <br/>Library</h1>
                    </div>
                </div>
            </header>

			<section className="light-bg row" id="welcome">
                <div className="container">
                    <img src="../img/library-bug.svg" className="bug"/>
                    <h2>Welcome!</h2>
                    <div style={{padding:'30px 0'}}>
                        Welcome to the card catalog! An inventory of every digital project from across Gilead’s regions. Looking for info or inspiration? Feel free to dig through the drawers, organized by region and area of specialty. Feel free to reach out to project leads for more information through their contact info on each project card. 
                    </div>
                </div>
            </section>

            <section className="light-bg row" id="now-showing">
                <div className="container">
                    <img src="../img/library-bug.svg" className="bug"/>
                    <h2> The Catalog</h2>
                                    </div>

                    <LibraryAccordion/>
            </section>
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