import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap";
import { AnimatedHeader } from "../components/animatedHeader"
import { Section } from "../components/section"
import {Blocked} from '../components/blocked'

export default function index() {
  return <Blocked />
    return (
      <Layout pageName="Online Listening Pub" activePage="online-listening-pub" containerClass="online-listening-pub">
        <Section>
          <Container>
            <p className="mt-5 mb-3">
              The Internet and social media readily at consumers’ fingertips bring the opportunity to use social and search listening tools to rapidly gain information about our patient’s needs. 
            </p>
            <h4>
              This is where Online Listening comes in…
            </h4>
          </Container>
        </Section>
          <Section light id="welcome">
            <Container>
              <AnimatedHeader svg="icon-listening-1" title="Welcome!"/>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://player.vimeo.com/video/749620381" 
                    frameBorder="0" 
                    allow="fullscreen" 
                    allowFullScreen
                    title="Vincent Lempers Welcome"
                  ></iframe>
                </div>
            </Container>
          </Section>
          <Section light>
            <Container>
              <AnimatedHeader svg="icon-listening-2" title="What is Online Listening?"/>
                <p> 
                  Online listening or digital listening utilizes technology to automatically track and analyze conversations and interactions on social media channels. Social listening software collects metrics and scrapes for specific keywords to identify trends and patterns. Through data analysis, we can surface scientific insights and develop individualized plans of action to share broadly to benefit HCPs, patients, our industry and more.
                </p>
                <p>
                  Another beneficial digital listening tool is search listening. Using this tool, we work closely with an agency to collect internet search requests and organize them into a detailed report that helps us better understand our patients' most relevant concerns and preferences. Search listening gathers insights into our patient's actual needs, motivations and behaviours, essentially stripping away the filter of what they may not say publicly on a social media platform.
                </p>
                <h4 class="mt-5">Why use Online Listening in your work?</h4>
                <p>
                  Both social and search listening can help you check the pulse of your target audience to understand and identify knowledge gaps and unmet needs. By understanding our patients’ expectations and concerns better, we can better support them throughout their journey.
                </p>
            </Container>
          </Section>
          <Section light>
            <Container>
                <AnimatedHeader svg="icon-listening-3" title="Online Listening @ Gilead"/>
                <h4 class="mb-3">See how your colleagues are applying Online Listening in their own work.</h4>
                <div className="ratio ratio-16x9 mt-5">
                  <iframe 
                    src="https://player.vimeo.com/video/748127174" 
                    frameBorder="0" 
                    allow="fullscreen" 
                    allowFullScreen
                    title="Vincent Lempers Welcome"
                  ></iframe>
                </div>
                <div className="ratio ratio-16x9 mt-5">
                  <iframe 
                    src="https://player.vimeo.com/video/748114148" 
                    frameBorder="0" 
                    allow="fullscreen" 
                    allowFullScreen
                    title="Vincent Lempers Welcome"
                  ></iframe>
                </div>
            </Container>
          </Section>
      </Layout>
    )
}

