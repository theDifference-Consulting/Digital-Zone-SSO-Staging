import React from "react"
import Layout from "../components/layout"
import {Container, Row, Col} from "react-bootstrap"

export default function index() {
    return (
        <Layout pageName="Drive-Innovation Theater" activePage='drive-in' containerClass="drive-in">
			<Row className="light-bg section" id="welcome">
                <Container>
                    <img src="../img/popcorn-bug.svg" className="bug" alt="bug icon"/>
                    <h2>Welcome!</h2>
                    <div style={{padding:'30px 0'}}>
                        This is where you’ll find the latest video stories about digital innovation happening around Gilead. We will be posting new videos regularly so check back often!
                    </div>
                    <div className="yellow-video-block">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe 
                                className="embed-responsive-item" 
                                src="https://player.vimeo.com/video/463565573" 
                                width="640" 
                                height="360" 
                                frameBorder="0" 
                                allow="fullscreen" 
                                allowFullScreen
                                title="Mike Elliot: Welcome"
                            ></iframe>
                        </div>
                        <b>Mike Elliott</b><br/>
                            Stockley Park, UK<br/>
                            michael.elliott@gilead.com
                    </div>
                </Container>
            </Row>

            <Row className="light-bg section" id="now-showing">
                <Container>
                    <img src="../img/popcorn-bug.svg" className="bug" alt="bug icon"/>
                    <h2>Now Showing</h2>
                    <div style={{padding:'30px 0'}}>
                        Learn all a bold new digital tool for HIV-treating physicians.
                    </div>
                    <div className="yellow-video-block">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                className="embed-responsive-item" 
                                src="https://player.vimeo.com/video/582243291" 
                                width="640" 
                                height="360" 
                                frameBorder="0" 
                                allow="fullscreen" 
                                allowFullScreen
                                title="Gap Connect"
                            ></iframe>
                        </div>
                        <b>Ahmet Yilmaz</b><br/>
                        Turkey<br/>
                        ahmet.yilmaz1@gilead.com
                    </div>
                    <Row className="margin-top-md">
                        <Col sm={6}>
                            <div className="yellow-video-block">
                                <p>
                                    Learn all about the Gilead Advisory Platform, a powerful new Advisory Board connection tool.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                    className="embed-responsive-item" 
                                    src="https://player.vimeo.com/video/483166427" 
                                    width="640" 
                                    height="360" 
                                    frameborder="0" 
                                    allow="autoplay; fullscreen" 
                                    allowfullscreen
                                    title="Gap Connect"
                                ></iframe>
                                </div>
                                <p>
                                    <b>Julie Newman</b><br/>
                                    Australia<br/>
                                    julie.newman@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </Col>
                        <Col sm={6}>
                            <div className="yellow-video-block">
                                <p>
                                    Take a journey through our powerful new medication reminder tool, the PrEP app.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                    className="embed-responsive-item" 
                                    src="https://player.vimeo.com/video/536992198" 
                                    width="640" 
                                    height="360" 
                                    frameborder="0" 
                                    allow="autoplay; fullscreen" 
                                    allowfullscreen
                                    title="PrEP App"
                                ></iframe>
                                </div>
                                <p>
                                    <b>Julie Newman</b><br/>
                                    Australia<br/>
                                    julie.newman@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </Col>
                        <Col sm={6}>
                            <div className="yellow-video-block">
                                <p>
                                    Get to know the Covid-19 Middle East Chatbot and how it's being used to share knowledge efficiently.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                        className="embed-responsive-item" 
                                        src="https://player.vimeo.com/video/463559431" 
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen
                                        title="Sherif Khatta on Come Chat"
                                    ></iframe>
                                </div>
                                <p>
                                    <b>Sherif Khattab</b><br/>
                                    Dubai, UAE<br/>
                                    sherif.khattab@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </Col>
                        <Col sm={6}>
                            <div className="yellow-video-block">
                                <p>
                                    Take a look at how we are using digital tools to help nurses with their ongoing education.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                        className="embed-responsive-item" 
                                        src="https://player.vimeo.com/video/470263070" 
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen
                                        title="Danielle Brackenridge on Assist-RA"
                                    ></iframe>
                                </div>
                                <p>
                                    <b>Danielle Brackenridge</b><br/>
                                    UK<br/>
                                    danielle.brackenridge@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </Col>
                        <Col sm={6}>
                            <div className="yellow-video-block">
                                <p>
                                    Explore the world of hackathons and see how we're using developer bootcamps to assist in HIV research.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                        className="embed-responsive-item" 
                                        src="https://player.vimeo.com/video/470281346" 
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen
                                        title="Roberto La Ferla on Hackathon"
                                    ></iframe>
                                </div>
                                <p>
                                    <b>Roberto La Ferla</b><br/>
                                    Italy<br/>
                                    Roberto.LaFerla@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </Col>
                        <Col sm={6}>
                            <div className="yellow-video-block">
                                <p>
                                    Check out the Gilead Middle East database, and how we are using it to connect and share our expertise.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                        className="embed-responsive-item" 
                                        src="https://player.vimeo.com/video/463557184" 
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen
                                        title="Sherif Khattab on GMED"
                                    ></iframe>
                                </div>

                                <p>
                                    <b>Sherif Khattab</b><br/>
                                    Dubai, UAE<br/>
                                    sherif.khattab@gilead.com
                                </p>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </Col>
                        <Col sm={6}>
                            <div className="yellow-video-block">
                                <p>
                                    Learn about 2020’s ESL IHC convention and our preparations to get the most out of a virtual experience.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                        className="embed-responsive-item" 
                                        src="https://player.vimeo.com/video/467531893" 
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen
                                        title="Ramon Thali and Ivo Berkobic on Virtual IHC"
                                    ></iframe>
                                </div>
                                <Row>
                                    <Col sm={6}>
                                        <p>
                                            <b>Ramon Thali</b><br/>
                                            Switzerland<br/>
                                            ramon.thali@gilead.com
                                        </p>
                                    </Col>
                                    <Col sm={6}>
                                        <p>
                                            <b>Ivo Berkovic</b><br/>
                                            Switzerland<br/>
                                            ivo.berkovic@gilead.com
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </Col>
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Learn about the way HIV experts in Australia have adapted to stay connected and share their expertise with each other.
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe 
                                        className="embed-responsive-item" 
                                        src="https://player.vimeo.com/video/465969769" 
                                        width="640" 
                                        height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen
                                        title="Julie Newman on Virtual HIV Meetings"
                                    ></iframe>
                                </div>
                                <b>Julie Newman</b><br/>
                                Australia<br/>
                                julie.newman@gilead.com
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="yellow-video-block">
                                <p>
                                    Learn how the Middle East Medical Affairs team uses a digital platform to expand its reach to local HIV specialists, provide them with much needed scientific information and learn about their interests and behaviors.
                                </p>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe 
                                            className="embed-responsive-item" 
                                            src="https://player.vimeo.com/video/463555097" 
                                            width="640" 
                                            height="360" 
                                            frameborder="0" 
                                            allow="autoplay; fullscreen" 
                                            allowfullscreen
                                            title="Sherif Khattab on HIV Academy"
                                        ></iframe>
                                    </div>
                                <b>Sherif Khattab</b><br/>
                                Dubai, UAE<br/>
                                sherif.khattab@gilead.com
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </div>
                    </Row>
                </Container>
            </Row>
        </Layout>
	)
}