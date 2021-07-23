import React from "react"
import LibraryAccordion from "../components/libraryAccordion/libraryAccordion"
import Layout from "../components/layout"
import { Row, Container } from "react-bootstrap";

export default function index() {
  return (
        <Layout pageName="Digital Project Library" activePage='library' containerClass="library">
			<Row className="light-bg section" id="welcome">
                <Container>
                    <img src="../img/library-bug.svg" className="bug" alt="bug icon"/>
                    <h2>Welcome!</h2>
                    <div style={{padding:'30px 0'}}>
                        Welcome to the card catalog! An inventory of every digital project from across Gilead’s regions. Looking for info or inspiration? Feel free to dig through the drawers, organized by region and area of specialty. Feel free to reach out to project leads for more information through their contact info on each project card. 
                    </div>
                </Container>
            </Row>

            <Row className="light-bg section" id="now-showing">
                <Container>
                    <img src="../img/library-bug.svg" className="bug" alt="bug icon"/>
                    <h2> The Catalog</h2>
                </Container>
                <LibraryAccordion/>
            </Row>
        </Layout>
	)
}