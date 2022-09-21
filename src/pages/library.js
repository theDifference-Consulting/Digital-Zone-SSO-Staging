import React from "react"
import LibraryAccordion from "../components/libraryAccordion/libraryAccordion"
import Layout from "../components/layout"
import { Container } from "react-bootstrap";
import { Section } from "../components/section"
import { AnimatedHeader } from "../components/animatedHeader"
import {Blocked} from '../components/blocked'

export default function index() {
  return <Blocked />
  return (
    <Layout pageName="Digital Project Library" activePage='library' containerClass="library">
      <Section>
        <Container>
          <p className="mt-5 mb-3">
            Shh! You’re in the Digital Project Library, an inventory of every digital project from across Gilead’s regions.
          </p>
          <h4>
            Enjoy your browsing!
          </h4>
        </Container>
      </Section>
      <Section light id="now-showing">
        <Container>
          <AnimatedHeader svg="icon-library-browse" title="Browse the Catalog"/>
            <p className="pb-5">
              Looking for info or inspiration? Dig through the drawers, organized by region and area of specialty, to see all the digital projects that Gilead professionals across the globe have created. For more information, feel free to reach out to project leads through their contact info on each project card.
            </p>
          <LibraryAccordion/>
        </Container>
      </Section>
    </Layout>
	)
}
