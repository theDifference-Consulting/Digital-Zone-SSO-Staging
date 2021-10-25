import React from "react"
import Layout from "../components/layout"
import { Row, Col, Container } from "react-bootstrap";

export default function index() {
    return (
        <Layout pageName="Digital Advisory Board Lab" activePage='digital-advisory-board-lab' containerClass="digital-advisory-board-lab">
    		<Row className="light-bg section" id="welcome">
                <Container>
                    <img src="../img/handshake-bug.svg" className="bug" alt="handshake icon"/>
                    <h2>Welcome!</h2>
                    <p class="mb-3">Welcome to the Digital Advisory Board Lab, where you can learn all about the virtual innovation that allows users to gain insight from other professionals without geographical or other restrictions.</p>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item" 
                            src="https://player.vimeo.com/video/631114194" 
                            width="640" 
                            height="360" 
                            frameBorder="0" 
                            allow="fullscreen" 
                            allowFullScreen
                            title="Vincent Lempers Welcome"
                        ></iframe>
                    </div>
                </Container>
            </Row>
            <Row className="light-bg section" id="">
                <Container>
                    <img src="../img/convo-bug.svg" className="bug" alt="convo icon"/>
                    <h2>What is a Digital Advisory Board?</h2>
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
                                These types of advisory boards allow you to collate real-time insights during a period of time that couple be weeks, months or a year. We use a virtual messenger platform to facilitate the discussions with the advisors. All participants are able to see and respond to everyone’s conversations within the platform.                            </p>
                        </Col>
                        <Col sm={4} className="mb-3">
                            <h4 className="left-arrow">Rolling Asynchronous Advisory Boards</h4>
                            <p>
                                Physicians on these advisory boards engage for 6 months, a year or more, providing feedback and input on a variety of topics with a combination of synchronous and asynchronous interactions. These Advisory Boards are excellent when we need input at various stages of our research.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className="light-bg section" id="">
                <Container>
                    <img src="../img/plan-bug.svg" className="bug" alt="plan icon"/>
                    <h2>Digital Advisory Board Planning Considerations</h2>
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
            </Row>
            <Row className="light-bg section" id="">
                <Container>
                    <img src="../img/light-bug.svg" className="bug" alt="lightbulb icon"/>
                    <h2>Advice From Rolling Advisory Board Pros</h2>
                     <Row>
                     <Col sm={6} className="pros">
                        <div className="headshot-bg">
                            <h3>
                                Vincent Lempers
                            </h3>
                            Associate Director, Medical Affairs<br/>
                            COVID-19<br/>
                            Netherlands
                            <img src="../img/VincentLempers-TipsPic.jpg" alt="Vincent Lempers headshot"/>
                        </div>
                        <ol>
                            <li>
                            Make sure all advisors have the correct zoom link and have the meeting in their calendar. On the day of the ad board, email the advisors with a reminder that you are looking forward to seeing them
                            </li>
                            <li>
                            Make sure that all advisors are 5 minutes early so everyone can soundcheck and test their camera
                            </li>
                            <li>
                            If you record the session clearly state this up front and use a disclaimer in line with BC
                            </li>
                            <li>
                            If you are using polls it may be useful to have IT assistance on site so the polling questions can be pre-loaded
                            </li>
                            <li>
                            If your internet is better over 4G than WiFi, make a portal using your phone so you can assure good connection throughout the ad board
                            </li>
                        </ol>
                    </Col>
                     <Col sm={6} className="pros">
                        <div className="headshot-bg">
                            <h3>
                                Corinna Oberle, Ph.D
                            </h3>
                            Associate Director, HIV <br/>
                            Medical Affairs<br/>
                            Switzerland
                            <img src="../img/CorinnaOberle-TipsPic.jpg" alt="Corinna Oberle, Ph.D headshot"/>
                        </div>
                        <ol>
                            <li>
                            Have another Medical colleague attend so that one can present data by sharing slides and the other can moderate chat, be timekeeper and handle questions and comments from advisors
                            </li>
                            <li>
                            Have IT support before and during meeting for any issues that may come up
                            </li>
                            <li>
                            Do not run a virtual ad board for more than 2.5 hrs, and have breaks during the event
                            </li>
                            <li>
                            To encourage interactivity during virtual ad boards, be prepared to address questions directly to advisors and use interactive tools such as Slido
                            </li>
                            <li>
                            During discussion, stop screen sharing the presentation slides so that the discussion feels more personal
                            </li>
                        </ol>
                    </Col>
                     <Col sm={6} className="pros">
                        <div className="headshot-bg">
                            <h3>
                                Rita Freire
                            </h3>
                            Associate Director, Medical Affairs<br/>
                            Liver Diseases<br/>
                            Portugal
                            <img src="../img/RitaFreire-TipsPic.jpg" alt="Rita Freire headshot"/>
                        </div>
                        <ol>
                            <li>
                            Develop the agenda for 2-2.5 hrs max
                            </li>
                            <li>
                            Start and end on time, and ask advisors to join 5 min early. If there is a topic that you would like to discuss further, do it as follow-up of the Ad board
                            </li>
                            <li>
                            Invite 5-6 advisors maximum 
                            </li>
                            <li>
                            Send information and materials in advance, allowing advisors to be better prepared and focused for the discussion
                            </li>
                            <li>
                            Make sure you can see all advisors during the meeting and involve them in the discussion in a balanced way
                            </li>
                            <li>
                            Use dynamic exercises to collect feedback (eg. jamboard.google.com; miro.com)
                            </li>
                            <li>
                            Include a short break for stretching
                            </li>
                        </ol>
                    </Col>
                    <Col sm={6} className="pros">
                        <div className="headshot-bg">
                            <h3>
                                Aurelie Freismuth, PharmD
                            </h3>
                                Associate Director, Liver Diseases<br/>
                                Medical Affairs<br/>
                                Melbourne, AUS
                            <img src="../img/AurelieFreismuth-TipsPic.jpg" alt="Aurelie Freismuth, PharmD headshot"/>
                        </div>
                        <ol>
                            <li>
                            Do a full IT check prior to the event
                            </li>
                            <li>
                            Get an agency to attend on the night to fix IT issues in the background and move slides for you if you are chairing as it’s one less thing to think about
                            </li>
                            <li>
                            Cap virtual ad boards at 1.5 hours max. Better to run 2 sessions over 2 weeks than do a longer ad board as people’s attention will decline over time 
                            </li>
                            <li>
                            Think outside the box with timing. Given that people don’t need to travel, they could be free before their clinic in the morning or at lunchtime instead of the usual 6pm-8pm
                            </li>
                            <li>
                            Send questions in advance so that the time on the call is best utilised towards discussion
                            </li>
                        </ol>
                    </Col>
                </Row>
                </Container>
            </Row>
        </Layout>
    )
}