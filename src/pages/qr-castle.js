import React from "react"
import Layout from "../components/layout"
import { Row, Col, Container } from "react-bootstrap";
import { AnimatedHeader } from "../components/animatedHeader"
import { Section } from "../components/section"
import {AdviserMessage} from "../components/advicerMessage";

const advisers = {
  damien: {
    name: "Damien Fagan",
    img: "../img/damien",
    title: "Associate Director",
    role: "Medical Affairs, HIV",
    messages: [
      "Start planning and outreach as early as possible since there are a lot of people across different functions to potentially involve.",
      "Leverage your network of global colleagues and relationships to reach out to the primary author, especially if they are external.",
      "Give clear guidance on your objective, timelines and expectations from the beginning. Keep in mind that many clinicians may not prioritize this endeavor, so you may need to be persistent and send a few reminder emails.",
      "Provide some local context for why you believe this research is beneficial to your key opinion leaders (KOLs) – this helps the author tailor the communication to your audience.",
      "Think outside the box. For example, we are looking at other ways to bring data to life, including augmented reality – watch this space for that!",
    ]
  },
  mike: {
    name: "Mike Tran",
    img: "../img/mike",
    title: "Senior Manager,",
    role: "Graphics Services",
    messages: [
      "Consider people’s time and attention span at conferences and keep the video to 2 minutes or less.",
      "If shooting the video yourself with an iPhone, use a tripod for stability, good lighting and a quiet environment.",
      "Be creative! People appreciate the extra effort, and you’ll have more people watching the entire video.",
    ]
  },
}

export default function index() {
  return (
    <Layout pageName="QR Castle" activePage='qr-castle' containerClass="qr-castle">
      <Section>
        <Container>
          <p className="mb-3 mt-5">
            So, you’ve crossed the drawbridge into the QR castle. Get ready to learn all about using QR codes at Gilead. See examples, get tips and hear how colleagues are using them to enhance and extend conference posters.
          </p>
          <h4>
            Scroll forth, brave visitor!
          </h4>
        </Container>
      </Section>
    	<Section light id="welcome">
        <Container>
          <AnimatedHeader svg="icon-qr-welcome" title="Welcome!"/>
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
      </Section>
      <Section light>
        <Container>
          <blockquote>
            “Using QR video links on conference posters is an effective way of communicating the science, and video may be a preferable form of media for many conference attendees. It’s key to continuously improve the way we communicate data externally since it ultimately impacts patient care. Having QR video links on Gilead conference posters would be great as standard practice; especially recently with virtual conferences where there is no person-to-person interaction at the poster.”
          </blockquote>
          <p>
            <b>-Julie Ryu</b><br/>
            Director, Medical Affairs Research
          </p>
        </Container>
      </Section>
      <Section light id="what-qr">
        <Container>
          <AnimatedHeader svg="icon-qr-whatis" title="What Is A QR Code?"/>
          <p>
            A QR code or "Quick Response" code is a type of barcode that contains a matrix of dots that can be scanned by your smartphone camera to open a webpage, send an email, access additional data or deliver an augmented reality experience.
          </p>
        </Container>
        </Section>
        <Section light id="qr-at-gilead">
          <Container>
            <AnimatedHeader svg="icon-qr-atgilead" title="QR Codes @ Gilead"/>
            <Row>
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
            </Row>
            <Row>
              <Col sm={6}>
                <img src="../img/qr-1.svg" className="qr-example" alt="qr code example"/>
                <img src="../img/qr-example-1.png" className="img-fluid" alt="qr code example"/>
              </Col>
              <div className="example-spacer d-block d-sm-none"></div>
              <Col sm={6}>
                <img src="../img/qr-2.svg" className="qr-example" alt="qr code example"/>
                <img src="../img/qr-example-2.png" className="img-fluid" alt="qr code example"/>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section light id="create-own">
          <Container>
            <AnimatedHeader svg="icon-qr-ready" title="Ready To Use QR Codes On Your Posters?"/>
            <h3 className="yellow-bg">Here’s What to Do</h3>
            <Row>
              <Col className="d-none d-sm-block" sm={{span: 2, offset: 1}}>
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
        </Section>
        <Section light id="qr-pros">
            <Container>
              <AnimatedHeader svg="icon-qr-advice" title="Advice From QR Code Pros"/>
              <Row>
                <Col sm={5} md={{span: 4, offset: 1}} xs={12}>
                  <AdviserMessage adviser={advisers.damien} />
                </Col>
                <Col sm={{ span: 5, offset: 2}} md={{ span: 4, offset: 2}}  xs={12}>
                  <AdviserMessage adviser={advisers.mike} />
                </Col>
              </Row>
            </Container>
        </Section>
    </Layout>
	)
}
