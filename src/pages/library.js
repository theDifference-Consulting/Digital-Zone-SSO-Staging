import React from "react"
import LibraryAccordion from "../components/libraryAccordion/libraryAccordion"
import Layout from "../components/layout"
import { Container } from "react-bootstrap";
import { Section } from "../components/section"
import { AnimatedHeader } from "../components/animatedHeader"

export default function index() {
  return (
        <Layout pageName="Digital Project Library" activePage='library' containerClass="library">
          <Section light id="welcome">
            <Container>
              <AnimatedHeader svg="library-bug" title="Welcome!"/>
              <div style={{padding:'30px 0'}}>
                  Welcome to the card catalog! An inventory of every digital project from across Gilead’s regions. Looking for info or inspiration? Feel free to dig through the drawers, organized by region and area of specialty. Feel free to reach out to project leads for more information through their contact info on each project card. 
              </div>
            </Container>
          </Section>

          <Section light id="now-showing">
            <Container>
              <AnimatedHeader svg="library-bug" title="The Catalog"/>
            </Container>
            <LibraryAccordion/>
          </Section>
        </Layout>
	)
}
