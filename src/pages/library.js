import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"
import LibraryAccordion from "../components/libraryAccordion/libraryAccordion"
import Layout from "../components/layout"

export default function index() {
  return (
        <Layout pageName="Digital Project Library" activePage='library' containerClass="library">
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
        </Layout>
	)
}