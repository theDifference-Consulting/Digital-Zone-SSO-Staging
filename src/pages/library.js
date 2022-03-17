import React from "react"
import LibraryAccordion from "../components/libraryAccordion/libraryAccordion"
import Layout from "../components/layout"
import { Container } from "react-bootstrap";
import { Section } from "../components/section"
import { AnimatedHeader } from "../components/animatedHeader"

export default function index() {
  return (
    <Layout pageName="Digital Project Library" activePage='library' containerClass="library">
      <Section>
        <Container>
          <p className="mt-5 mb-3">
            Welcome to the card catalog! An inventory of every digital project from across Gilead’s regions. Looking for info or inspiration? Feel free to dig through the drawers, organized by region and area of specialty. Feel free to reach out to project leads for more information through their contact info on each project card. 
          </p>
          <h4>
            TODO: Add some title here
          </h4>
        </Container>
      </Section>
      <Section light id="now-showing">
        <Container>
          <AnimatedHeader svg="library-bug" title="Browse the Catalog"/>
            <p className="pb-5">
              Looking for info or inspiration? Dig through the drawers, organized by region and area of specialty, to see all the digital projects that Gilead professionals across the globe have created. For more information, feel free to reach out to project leads through their contact info on each project card.
            </p>
          <LibraryAccordion/>
        </Container>
      </Section>
    </Layout>
	)
}
