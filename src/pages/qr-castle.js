import React from "react"
import Layout from "../components/layout"
import { Row, Col, Container } from "react-bootstrap";

export default function index() {
  return (
    <Layout pageName="QR Castle" activePage='qr-castle' containerClass="qr-castle">
    	<Row className="light-bg section" id="welcome">
            <Container>
                <img src="../img/qr-bug.svg" className="bug" alt="bug icon"/>
                <h2>Welcome!</h2>
                <Row>
                    <Col sm={5}>
                        <img src="../img/welcome-qr.svg" alt="welcome qr code"/>
                    </Col>
                    <Col sm={7}>
                        <h3>Use this QR Code to access a video welcoming you to the Zone</h3>
                        <ul className="triangle">
                            <li>Open the camera on your phone or mobile device</li>
                            <li>Point it at the QR code to scan</li>
                            <li>Press and hold the home button</li>
                            <li>Tap on the notification banner to open the link associated with the QR code</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Row>
        <section className="audio-quote">
            <Container>
                <blockquote>
                    “Using QR video links on conference posters is an effective way of communicating the science, and video may be a preferable form of media for many conference attendees. It’s key to continuously improve the way we communicate data externally since it ultimately impacts patient care. Having QR video links on Gilead conference posters would be great as standard practice; especially recently with virtual conferences where there is no person-to-person interaction at the poster.”
                </blockquote>
                <p>
                    <b>-Julie Ryu</b><br/>
                    Director, Medical Affairs Research
                </p>
            </Container>
        </section>
        <Row className="light-bg section" id="what-qr">
            <Container>
                <img src="../img/qr-bug.svg" className="bug" alt="bug icon"/>
                <h2>What Is A QR Code?</h2>
                <p>
                    A QR code or "Quick Response" code is a type of barcode that contains a matrix of dots that can be scanned by your smartphone camera to open a webpage, send an email, access additional data or deliver an augmented reality experience.
                </p>
            </Container>
        </Row>
        <Row className="light-bg section" id="qr-at-gilead">
            <Container>
                <img src="../img/qr-bug.svg" className="bug" alt="bug icon"/>
                <h2>QR Codes @ Gilead</h2>
                <p>
                    QR Codes have a variety of applications, and one of the hottest right now at Gilead is to enhance and extend the content and reach of your conference poster.
                </p>
                <p>
                    By giving conference attendees an easy way to access a video, article, or podcast from the author or some other resource, your poster starts to feel like an interactive experience that appeals to different learning modalities. It’s a convenient and cool way to get the key information during or after the conference.
                </p>
                <p>
                    Hear how Damien Fagan, Associate Director Medical Affairs, HIV in Melbourne and his colleagues used QR codes to substantially increase the number of people who benefitted from their poster presentations.
                </p>
                <div className="vimeo-embed" style={{padding:`56.25% 0 0 0`, position:`relative`}}>
                    <iframe 
                        src="https://player.vimeo.com/video/416411111?title=0&byline=0&portrait=0" 
                        style={{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`100%`}} 
                        frameBorder="0" 
                        allow="autoplay; fullscreen" 
                        allowFullScreen
                        title="QR Code Case Study"
                    ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <h3>Use the QR code on the posters to access additional content!</h3>
                <Row>
                    <Col sm={6}>
                        <img src="../img/qr-1.svg" className="qr-example" alt="qr code example"/>
                        <img src="../img/qr-example-1.png" className="img-fluid" alt="qr code example"/>
                    </Col>
                    <div className="example-spacer visible-xs"></div>
                    <Col sm={6}>
                        <img src="../img/qr-2.svg" className="qr-example" alt="qr code example"/>
                        <img src="../img/qr-example-2.png" className="img-fluid" alt="qr code example"/>
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="light-bg section" id="create-own">
            <Container>
                <img src="../img/tool-bug.svg" className="bug" alt="bug icon"/>
                <h2>Ready To Use QR Codes On Your Posters?</h2>
                <h3 className="yellow-bg">Here’s What to Do</h3>
                <Row>
                    <Col xsHidden sm={{span: 2, offset: 1}}>
                        <img src="../img/poster.svg" className="img-fluid" alt="poster"/>
                    </Col>
                    <Col sm={6}>
                        <ol>
                            <li>
                                Create the video or other content people will access through the QR code
                            </li>
                            <li>
                                Upload the video and poster content to One Drive
                            </li>
                            <li>
                                Share the video and poster content from One Drive to MAO.Graphics@gilead.com
                            </li>
                            <li>
                                The graphics team will create the poster, compress the poster and add the QR code
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="light-bg section" id="qr-pros">
            <Container>
                <img src="../img/qr-bug.svg" className="bug" alt="bug icon"/>
                <h2>Advice From QR Code Pros</h2>
                <Row>
                    <Col sm={6} md={{span: 4, offset: 2}}>
                        <div className="headshot-bg">
                            <h3>
                            Damien Fagan
                            </h3>
                            Associate Director<br/>
                            Medical Affairs, HIV
                            <img src="../img/damien-fagan.jpg" alt="Damien Fagan headshot"/>
                        </div>
                        <ol>
                            <li>
                                Start planning and outreach as early as possible since there are a lot of people across different functions to potentially involve.
                            </li>
                            <li>
                                Leverage your network of global colleagues and relationships to reach out to the primary author, especially if they are external.
                            </li>
                            <li>
                                Give clear guidance on your objective, timelines and expectations from the beginning. Keep in mind that many clinicians may not prioritize this endeavor, so you may need to be persistent and send a few reminder emails.
                            </li>
                            <li>
                                Provide some local context for why you believe this research is beneficial to your key opinion leaders (KOLs) – this helps the author tailor the communication to your audience.
                            </li>
                            <li>
                                Think outside the box. For example, we are looking at other ways to bring data to life, including augmented reality – watch this space for that!
                            </li>
                        </ol>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="headshot-bg">
                            <h3>
                            Mike Tran
                            </h3>
                            Senior Manager,<br/>
                            Graphics Services
                            <img src="../img/mike-tran.jpg" alt="Mike Tran headshot"/>
                        </div>
                        <ol>
                            <li>
                                Consider people’s time and attention span at conferences and keep the video to 2 minutes or less.
                            </li>
                            <li>
                                If shooting the video yourself with an iPhone, use a tripod for stability, good lighting and a quiet environment.
                            </li>
                            <li>
                                Be creative! People appreciate the extra effort, and you’ll have more people watching the entire video.
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </Row>
    </Layout>
	)
}