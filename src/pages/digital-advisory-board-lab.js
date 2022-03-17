import React from "react"
import Layout from "../components/layout"
import { Row, Col, Container } from "react-bootstrap";
import { AnimatedHeader } from "../components/animatedHeader"
import { Section } from "../components/section"
import { AdviserMessage } from "../components/advicerMessage";

const advisers = {
  vincent: {
    name: "Vincent Lempers",
    img: "../img/vincent",
    title: "Associate Director, Medical Affairs",
    role: "COVID-19",
    country: "Netherlands",
    messages: [
      "Make sure all advisors have the correct zoom link and have the meeting in their calendar. On the day of the ad board, email the advisors with a reminder that you are looking forward to seeing them",
      "Make sure that all advisors are 5 minutes early so everyone can soundcheck and test their camera",
      "If you record the session clearly state this up front and use a disclaimer in line with BC",
      "If you are using polls it may be useful to have IT assistance on site so the polling questions can be pre-loaded",
      "If your internet is better over 4G than WiFi, make a portal using your phone so you can assure good connection throughout the ad board",
    ]
  },
  corinna: {
    name: "Corinna Oberle, Ph.D",
    img: "../img/corinna",
    title: "Associate Director, HIV ",
    role: "Medical Affairs",
    country: "Switzerland",
    messages: [
      "Have another Medical colleague attend so that one can present data by sharing slides and the other can moderate chat, be timekeeper and handle questions and comments from advisors",
      "Have IT support before and during meeting for any issues that may come up",
      "Do not run a virtual ad board for more than 2.5 hrs, and have breaks during the event",
      "To encourage interactivity during virtual ad boards, be prepared to address questions directly to advisors and use interactive tools such as Slido",
      "During discussion, stop screen sharing the presentation slides so that the discussion feels more personal",
    ]
  },
  aurelie: {
    name: "Aurelie Freismuth, PharmD",
    img: "../img/aurelie",
    title: "Associate Director, Liver Diseases",
    role: "Medical Affairs",
    country: "Melbourne, AUS",
    messages: [
      "Do a full IT check prior to the event",
      "Get an agency to attend on the night to fix IT issues in the background and move slides for you if you are chairing as it’s one less thing to think about",
      "Cap virtual ad boards at 1.5 hours max. Better to run 2 sessions over 2 weeks than do a longer ad board as people’s attention will decline over time ",
      "Think outside the box with timing. Given that people don’t need to travel, they could be free before their clinic in the morning or at lunchtime instead of the usual 6pm-8pm",
      "Send questions in advance so that the time on the call is best utilised towards discussion",
    ]
  },
  rita: {
    name: "Rita Freire",
    img: "../img/rita",
    title: "Associate Director, Medical Affairs",
    role: "Liver Diseases",
    country: "Portugal",
    messages: [
      "Invite 5-6 advisors maximum ",
      "Send information and materials in advance, allowing advisors to be better prepared and focused for the discussion",
      "Make sure you can see all advisors during the meeting and involve them in the discussion in a balanced way",
      "Use dynamic exercises to collect feedback (eg. jamboard.google.com; miro.com)",
      "Include a short break for stretching",
    ]
  },
}

export default function index() {
    return (
        <Layout pageName="Digital Advisory Board Lab" activePage='digital-advisory-board-lab' containerClass="digital-advisory-board-lab">
        <Section>
          <Container>
            <p className="mb-3">
              Welcome to the Digital Advisory Board Lab, where you can learn all about the virtual innovation that allows users to gain insight from other professionals without geographical or other restrictions.
            </p>
            <h4>
              TODO: add some title here
            </h4>
          </Container>
        </Section>
          <Section light id="welcome">
            <Container>
              <AnimatedHeader svg="handshake-bug" title="Welcome!"/>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://player.vimeo.com/video/631114194" 
                    frameBorder="0" 
                    allow="fullscreen" 
                    allowFullScreen
                    title="Vincent Lempers Welcome"
                  ></iframe>
                </div>
            </Container>
          </Section>
          <Section light id="">
            <Container>
              <AnimatedHeader svg="convo-bug" title="What is a Digital Advisory Board?"/>
                <p> 
                    A traditional advisory board is an in-person gathering of physicians where we seek their input to help shape our strategies and research. 
                </p>
                <p>
                    These events vary in the number of physicians participating and in duration, which ranges from a half day or evening to a full day or more. A digital advisory board serves the same purpose and has the same compliance requirements, but the gathering takes place virtually. 
                </p>
                <p class="mb-3">
                    Over the course of the pandemic, we’ve been experimenting and innovating. We now have three different types of digital advisory boards to suit different situations.
                </p>
                <Row>
                    <Col sm={4} className="mb-3">
                      <h4  className="left-arrow">Synchronous Advisory Boards</h4>
                      <p>
                          These are very similar to in-person advisory boards but they are virtual. We gather a set of advisors to provide their expertise and guidance for a half day or other short period. We use a virtual meeting platform and focus our discussions on a single topic or set of topics. GAP Connect is an internally developed virtual advisory platform that may be of interest to you. Please <a href="https://vimeo.com/483166427/f361761084" target="_blank" rel="noreferrer">click here</a> to find out more about the capabilities of GAP Connect.
                      </p>
                    </Col>
                    <Col sm={4} className="mb-3">
                      <h4 className="left-arrow">Asynchronous Advisory Boards</h4>
                      <p>
                          These types of advisory boards allow you to collate real-time insights during a period of time that couple be weeks, months or a year. We use a virtual messenger platform to facilitate the discussions with the advisors. All participants are able to see and respond to everyone’s conversations within the platform.
                      </p>
                    </Col>
                    <Col sm={4} className="mb-3">
                      <h4 className="left-arrow">Rolling Asynchronous Advisory Boards</h4>
                      <p>
                        Physicians on these advisory boards engage for 6 months, a year or more, providing feedback and input on a variety of topics with a combination of synchronous and asynchronous interactions. These Advisory Boards are excellent when we need input at various stages of our research.
                      </p>
                    </Col>
                </Row>
            </Container>
          </Section>
          <Section light id="">
            <Container>
                <AnimatedHeader svg="plan-bug" title="Digital Advisory Board Planning Considerations"/>
                <p class="mb-3">
                    Hosting a Digital Advisory Board takes a lot of planning and coordination. The good news is we’ve already learned a lot and are happy to share our key planning considerations to get you started. 
                </p>
                <p>
                    Technology
                    <ul>
                        <li>Understand what browser and tools will work best for your specific advisors</li>
                        <li>If using an online platform, give yourself a lot of time for IT to review and approve it.</li>
                        <li>Be sure to have your advisors test your platform and tools before the Advisory Board meets</li>
                    </ul>
                </p>
                <p>
                    Time
                    <ul>
                        <li>Consider how many hours of engagement is reasonable for your advisors and stick to that</li>
                        <li>Invite your advisors to join the Advisory Board at least X weeks/months before the (first) meeting</li>
                        <li>Provide a clear sense of the time commitment the Advisory Board will require</li>
                    </ul>
                </p>
                <p>
                    Moderation
                    <ul>
                        <li>Understand how your advisors like to engage and do your best to meet them where they are</li>
                        <li>Ask questions and invite comments directly from those who tend to stay quiet to ensure they feel valued</li>
                        <li>Respectfully limit comments from those who tend to dominate the discussion to ensure others can speak up</li>
                    </ul>
                </p>
            </Container>
          </Section>
          <Section light id="advice">
            <Container>
                <AnimatedHeader svg="light-bug" title="Advice From Rolling Advisory Board Pros"/>
                 <Row>
                 <Col sm={6} className="pros">
                    <AdviserMessage adviser={advisers.vincent} />
                </Col>
                 <Col sm={6} className="pros">
                    <AdviserMessage adviser={advisers.corinna} />
                </Col>
                 <Col sm={6} className="pros">
                    <AdviserMessage adviser={advisers.rita} />
                </Col>
                <Col sm={6} className="pros">
                    <AdviserMessage adviser={advisers.aurelie} />
                </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    )
}
