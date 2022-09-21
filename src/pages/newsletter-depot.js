import React from "react"
import newsletter from "../components/newsletter"
import Layout from "../components/layout"
import {Container, Row} from "react-bootstrap"
import { AnimatedHeader } from "../components/animatedHeader"
import { Section } from "../components/section"
import {Blocked} from '../components/blocked'

export default function index() {
  return <Blocked />
    return (
      <Layout pageName="Newsletter Depot" activePage='newsletter' containerClass="newsletter">
        <Section>
          <Container>
            <p className="mt-5 mb-3">
              Welcome to the Newsletter Depot! Here you can find a variety of helpful email templates that can be downloaded for use in any of your email campaign needs.
            </p>
            <h4>
              Check out the video below to get the most out of this Zone.
            </h4>
          </Container>
        </Section>
        <Section light id="welcome">
          <Container>
            <AnimatedHeader svg="icon-newsletter-welcome" title="Welcome!"/>
            <div className="ratio ratio-16x9">
                <iframe 
                  src="https://player.vimeo.com/video/537391928" 
                  frameBorder="0" 
                  allow="fullscreen" 
                  allowFullScreen
                  title="Welcome to the Newsletter Depot"
                ></iframe>
            </div>
          </Container>
        </Section>
        <Section light id="now-showing">
          <Container>
            <AnimatedHeader svg="icon-newsletter-template" title="Templates"/>
            <div className="wood-background">
              <Row className="templates">
                  {newsletter.map((item, idx) => (
                  <a href={"/media/newsletter/" + item.fileName} target="_blank" rel="noreferrer" className="position-relative col-md-6" key={item.fileName + '_' + idx}>
                      <img src={"/media/newsletter/" + item.img} className="img-fluid" alt={"newsletter background image" + item.fileName}/>
                  </a>
                  ))}
              </Row>
            </div>
          </Container>
        </Section>
        <Section light id="now-showing">
          <Container>
            <AnimatedHeader svg="icon-newsletter-submit" title="Share Your Own Templates"/>
            <p>
                Got a great template that you’d like to add to our collection? Upload it here! 
                All templates must be in .doc or .docx format, compatible with Microsoft Word.
            </p>
            <a  href="mailto:Mario.Garcia@gilead.com?cc=tina.raselli@gilead.com&subject=Digital%20Zone%20Newsletter%20Template%20Submission&body=Hi%20Mario%20and%20Tina,%20I%20found%20this%20great%20email%20template%20that%20I’d%20love%20to%20share%20on%20the%20Digital%20Zone.%0D%0DThank%20you,%0D[your name here]" className="btn block-highlight" style={{textTransform: "capitalize"}}>
                submit your template for review
            </a>
          </Container>
        </Section>
      </Layout>
	)
}
