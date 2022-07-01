import React from "react"
import Layout from "../components/layout"
import {Container, Row, Col} from "react-bootstrap"
import { AnimatedHeader } from "../components/animatedHeader"
import { Section } from "../components/section"

export default function index() {
    return (
        <Layout pageName="Drive-Innovation Theater" activePage='drive-in' containerClass="drive-in">
          <Section>
            <Container>
              <p className="mb-5 mt-5">
                Here at the Drive-Innovation Theater, you’ll find the latest video stories about digital innovation happening around Gilead.
              </p>
              <h4>
                We’ll be posting new videos regularly, so check back often!
              </h4>
            </Container>
          </Section>
            <Section light id="welcome">
                <Container>
                  <AnimatedHeader svg="icon-drivein-welcome" title="Welcome!"/>
                    <div className="ratio ratio-16x9">
                      <iframe 
                        src="https://player.vimeo.com/video/463565573" 
                        frameBorder="0" 
                        allow="fullscreen" 
                        title="Mike Elliot: Welcome"
                      ></iframe>
                    </div>
                </Container>
            </Section>

            <Section light id="now-showing">
                <Container>
                  <AnimatedHeader svg="icon-drivein-nowshowing" title="Now Showing"/>
                    <div style={{padding:'30px 0'}}>
                      Take a moment to learn about the powerful insights gained through Project SiSMO, a cutting-edge social media listening program developed within Gilead.
                    </div>
                    <div className="yellow-video-block">
                        <div className="ratio ratio-16x9">
                            <iframe
                              src="https://player.vimeo.com/video/714615320?h=d9634656c2" 
                              frameBorder="0" 
                              allow="fullscreen" 
                              title="Gilead Turkey on World Aids Day"
                            ></iframe>
                        </div>
                        <b>Mario Garcia</b><br/>
                        Spain<br/>
                        mario.garcia@gilead.com
                    </div>
                </Container>
            </Section>
            <Section light id="now-showing">
                <Container>
                  <AnimatedHeader svg="icon-drivein-collection" title="Drive-In Theatre Masterpiece Collection"/>
                    <Row className="margin-top-md">
                      <Col sm={6}>
                        <div className="yellow-video-block">
                          <p>
                              Learn all about a bold new digital tool for HIV-treating physicians.
                          </p>
                          <div className="ratio ratio-16x9">
                            <iframe 
                              src="https://player.vimeo.com/video/582243291" 
                              frameborder="0" 
                              allow="autoplay; fullscreen" 
                              title="Gilead Turkey on HIV Tips"
                          ></iframe>
                          </div>
                          <p>
                            <b>Ahmet Yilmaz</b><br/>
                            Turkey<br/>
                            ahmet.yilmaz1@gilead.com
                          </p>
                        </div>
                          <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                      </Col>
                        <Col sm={6}>
                          <div className="yellow-video-block">
                            <p>
                                Learn all about the Gilead Advisory Platform, a powerful new Advisory Board connection tool.
                            </p>
                            <div className="ratio ratio-16x9">
                              <iframe 
                              src="https://player.vimeo.com/video/483166427" 
                              frameborder="0" 
                              allow="autoplay; fullscreen" 
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
                            <div className="ratio ratio-16x9">
                              <iframe 
                              src="https://player.vimeo.com/video/536992198" 
                              frameborder="0" 
                              allow="autoplay; fullscreen" 
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
                            <div className="ratio ratio-16x9">
                              <iframe 
                                  src="https://player.vimeo.com/video/463559431" 
                                  frameborder="0" 
                                  allow="autoplay; fullscreen" 
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
                            <div className="ratio ratio-16x9">
                              <iframe 
                                src="https://player.vimeo.com/video/470263070" 
                                frameborder="0" 
                                allow="autoplay; fullscreen" 
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
                                <div className="ratio ratio-16x9">
                                    <iframe 
                                        src="https://player.vimeo.com/video/470281346" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
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
                                <div className="ratio ratio-16x9">
                                    <iframe 
                                        src="https://player.vimeo.com/video/463557184" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
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
                                <div className="ratio ratio-16x9">
                                    <iframe 
                                        src="https://player.vimeo.com/video/467531893" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
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
                                <div className="ratio ratio-16x9">
                                    <iframe 
                                        src="https://player.vimeo.com/video/465969769" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
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
                              <div className="ratio ratio-16x9">
                                <iframe 
                                  src="https://player.vimeo.com/video/463555097" 
                                  frameborder="0" 
                                  allow="autoplay; fullscreen" 
                                  title="Sherif Khattab on HIV Academy"
                                ></iframe>
                              </div>
                              <b>Sherif Khattab</b><br/>
                              Dubai, UAE<br/>
                              sherif.khattab@gilead.com
                            </div>
                            <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img" alt="backgound element"/>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="yellow-video-block">
                            <p>
                              Check out our incredible collaboration with Turkish superstar Tankurt Manas for World AIDS Day.
                            </p>
                            <div className="ratio ratio-16x9">
                              <iframe
                                src="https://player.vimeo.com/video/591140992" 
                                frameBorder="0" 
                                allow="fullscreen" 
                                title="Gilead Turkey on World Aids Day"
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
            </Section>
        </Layout>
    )
}
