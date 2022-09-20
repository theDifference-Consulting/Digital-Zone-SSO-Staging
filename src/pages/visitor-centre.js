import React from "react"
import Layout from "../components/layout"
import { Row, Col, Container } from "react-bootstrap"
import { AnimatedHeader } from "../components/animatedHeader"
import { Section } from "../components/section"
import { AdviserHeadshot } from "../components/adviserHeadshot";

const boardMemberData = [
    { name: "Julie Newman", country: "Australia", email: "julie.newman@gilead.com", img: "../img/julie" },
    { name: "Ramon Thali", country: "Switzerland", email: "ramon.thali@gilead.com", img: "../img/ramon" },
    { name: "Hassan Aladdin, PhD", country: "Nordics", email: "Hassan.Aladdin@gilead.com", img: "../img/hassan" },
    { name: "Mario Garcia", country: "Spain", email: "mario.garcia@gilead.com", img: "../img/mario" },
    { name: "Tina Raselli", country: "Switzerland", email: "tina.raselli@gilead.com", img: "../img/tina" },
    { name: "Sivana Koren", country: "Israel", email: "sivana.koren@gilead.com", img: "../img/SivanaKoren-ProfilePicture" },
    { name: "Samer El-Ali", country: "United Arab Emirates", email: "samer.el-aid@gilead.com", img: "../img/AsSamerElAli-Profile" }
]

const BoardMembers = boardMemberData.map((e) => {
    return(
        <Col md={6} lg={4}>
          <Container>
            <AdviserHeadshot adviser={e} />
          </Container>
        </Col>
    )
})  

const championsData = [
    { name: "Julie Newman", country: "Australia", email: "julie.newman@gilead.com" },
    { name: "Martin Baril", country: "Canada", email: "martin.baril@gilead.com" },
    { name: "Ricky Tsang", country: "UK", email: "ricky.tsang@gilead.com " },
    { name: "Christine Millet-Dusastre", country: "France", email: "christine.milletdusastre@gilead.com" },
    { name: "Boris Albuquerque", country: "Germany", email: "boris.albuquerque@gilead.com" },
    { name: "Mario Garcia", country: "Spain", email: "mario.garcia@gilead.com" },
    { name: "Roberto La Ferla", country: "Italy", email: "roberto.laferla@gilead.com" },
    { name: "Reiner Ribarics", country: "Austria", email: "reiner.ribarics@gilead.com" },
    { name: "Thierry Marysael", country: "Belgium", email: "thierry.marysael@gilead.com" },
    { name: "Ramon Thali", country: "Switzerland", email: "ramon.thali@gilead.com" },
    { name: "Hassan Aladdin", country: "Nordics", email: "hassan.aladdin@gilead.com" },
    { name: "Carla Santos", country: "Portugal", email: "carla.santos@gilead.com" },
    { name: "Igor Vinogradov", country: "Russia", email: "igor.vinogradov@gilead.com" },
    { name: "Howaida Abdelwahab", country: "Middle East", email: "howaida.abdelwahab@gilead.com" }
]

const Champions = championsData.map((e) => {
    return(
        <Col xs={6} sm={4}>
            <div className="champion-names">
                <h3>
                {e.name}
                </h3>
                {e.country}<br/>
                {e.email}
            </div>
            <img src="../img/headshot-bottom-bg.svg" alt="background"/>
        </Col>
    )
})  

export default function index() {
    return (
        <Layout pageName="Visitor Centre" activePage='visitor-centre' containerClass="visitor-info">
          <Section>
            <Container>
              <p className="mt-5 mb-3">
                You’ve arrived at the Gilead Digital Zone Visitor Centre.
              </p>
              <h4>
                Read on to learn more about the Digital Zone and the people behind it!
              </h4>
            </Container>
          </Section>
          <Section light>
            <Container>
              <AnimatedHeader svg="icon-visitor-welcome" title="Welcome!" />
              <Row>
                <h3>Welcome to the Digital Zone!</h3>
                <p>
                    Our mission is to increase the use of digital tools at Gilead to facilitate the sharing of information with healthcare professionals, patients and caregivers!
                </p>
                <br/>
                <h3>Our goal is to</h3>
                <ul className="triangle">
                    <li>
                        Establish the Digital Zone as the first point of reference when considering digital strategies that may be of interest
                    </li>
                    <li>
                        Create a cross-functional team that includes members from medical, commercial, clin ops, enterprise services and other areas of the company
                    </li>
                    <li>
                        Explore the potential of digital tools to facilitate external engagement, communication and the sharing of medical information to improve patient lives
                    </li>
                    <li>
                        Build digital tools and communications strategies into the medical POA process
                    </li>
                    <li>
                        Embed digital technology in Gilead’s daily practice and encourage innovation sharing across countries, functions and TAs
                    </li>
                </ul>
              </Row>
            </Container>
          </Section>
          <Section light>
            <Container>
              <AnimatedHeader svg="icon-visitor-navigating" title="Navigating the Zone" />
              <Row>
                <p>
                    The island is your main navigation page. The topic areas are structures around the island, and each active topic area is labeled. Click on a topic area to zoom in and see a summary of the topic.
                </p>
                <p>
                    From there, click the compass to go back to the full island or click through to access the topic area’s full content page with a variety of tools, tips and articles.
                </p>
                <p>
                    You can also use the menulet in the top right of each content page to jump to a specific zone’s content page and bypass the main island.
                </p>
                <p>
                    Don’t forget to bookmark <b>gileaddigitalzone.com!</b> <br/>
                    We feel sure you’ll be back often as we add more content.
                </p>
              </Row>
            </Container>
          </Section>
          <Section light>
            <Container>
              <AnimatedHeader svg="icon-visitor-resource" title="Who We Are" />
              <Row className="pb-5">
                <p>
                    We are the Digital Zone Tourism Board, a group of dedicated digital pioneers across Gilead who have teamed up to make sure the Zone is filled with exciting and useful content for you.
                </p>
                <p>
                    We coordinate interviews with digital groundbreakers across Gilead, share useful tips, tricks and hacks for implementing digital tools in our work, and lead by example, embracing digital tools wherever we can. Feel free to reach out to any board member nearest your region if you’d like expert input on using digital tools at Gilead.
                </p>
                <br/>
              </Row>
              <Row style={{justifyContent: "center"}}>
                  {BoardMembers}
              </Row>
            </Container>
          </Section>
          <Section light id="digital-champions">
            <Container>
              <AnimatedHeader svg="icon-visitor-whoweare" title="Local Digital Champions are a Great Resource" />
              <Row>
                <p>
                    <h3><b>Digital Champion Role:</b> (there are some differences among countries)</h3>
                </p>
                <ol>
                    <li>
                        Primary contact for new digital initiatives which are rolled out within Gilead
                    </li>
                    <li>
                        Consolidating the communication plans from Medical Affairs during this lockdown period, which necessarily take place in digital platforms, and that are led and executed by the different Medical Affairs Managers
                    </li>
                    <li>
                        Look out for digital initiatives, which might be of interest for the team
                    </li>
                    <li>
                        Advocate for the Digital Zone which will soon be rolled out
                    </li>
                </ol>
                <div className="full-width">
                    <h3>ACE Digital Champions </h3>
                </div>
                <br/>
              </Row>
              <Row>
                  {Champions}                
              </Row>
            </Container>
          </Section>
        </Layout>
    )
}
