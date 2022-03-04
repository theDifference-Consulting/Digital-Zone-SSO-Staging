import React from "react"
import Layout from "../components/layout"
import { Row, Col, Container } from "react-bootstrap"
import { AnimatedHeader } from "../components/animatedHeader"
import { AdvicerMessage } from "../components/advicerMessage"

// TODO: I think gatsby allows for a more easy and flexible way of adding info

const advicers = [{
  img: "../img/SivanaKoren-ProfilePicture.jpg",
  name: "Sivana Koren",
  title: "Senior Medical Manager",
  country: "Israel",
  messages: [
    "Decide in advance who is the most accurate audience for your newsletter so that you can build content that is interesting for them specifically",
    "Find out which days of the week and hours of the day when HCPs are more prone to open e-mails they receive, and aim to send your e-newsletter during those time points.",
    "Learn what is the benchmark for opening rates of e-mails/e-newsletters coming from pharma, in order to set your expectations and KPIs accordingly",
    "Before distribution make sure that the metrics of Opening Rates, Opening Times etc. will be available to you after sending the e-newsletters, in order to learn from these analytics and improve in future distributions",
    "Aim to send your newsletter at consistent intervals, e.g. once a month or once every two months. An audience that is expecting to receive an e-mail is more likely to open it"
  ]
}];

export default function index() {
    return (
      <Layout pageName="Metrics Outpost" activePage='metrics-outpost' containerClass="metrics-outpost">
        <Row className="light-bg section" id="welcome">
          <Container>
            <p class="mb-3">
                The exciting digital world brings with it expanding channels of engagement with our stakeholders, both internally and externally. As a result, we often spend a lot of time and effort planning, designing and executing our digital activities. But how do we know if our efforts were fruitful? Was the activity a success? Did it reach its target and goals? 
            </p>
            <h4>
              This is where metrics come in…
            </h4>
          </Container>
        </Row>
        <Row className="light-bg section" id="welcome">
          <Container>
            <AnimatedHeader svg="metrics-welcome-bug" title="Welcome!"/>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe 
                  className="embed-responsive-item" 
                  src="https://player.vimeo.com/video/646652856" 
                  width="640" 
                  height="360" 
                  frameBorder="0" 
                  allow="fullscreen" 
                  allowFullScreen
                  title="Metrics Outpost Welcome" 
              ></iframe>
            </div>
          </Container>
        </Row>
        <Row className="light-bg section" id="">
          <Container>
            <AnimatedHeader svg="metrics-info-bug" title="What are Metrics?"/>
            <p> 
                Whether it is web social media, apps, podcasts or other digital channels, metrics are values that help us measure, track, report and improve the performance of our digital activities.
            </p>
            <p>
                Metrics are often referred to as Key Performance Indicators (KPIs), but there is a difference. A metric is a number, where a KPI is the meaning of that number. A KPI includes insights. It is an interpretation of the data. To determine a KPI, it is useful to compare the actual value of the metric you are tracking with the average value for that certain activity in the industry. This helps you understand what success looks like.
            </p>
            <h3 className="mt-5">Choosing the Best Digital Metrics for your Project</h3>
            <p>
                Different digital channels and tools have different metrics, and it’s important to identify which metrics are most important to track for any given project. The metrics you choose should help you make more informed decisions to continuously improve performance.
            </p>
            <p>
                As the amount of available data is extremely large, you will need to choose wisely.
            </p>
            <p>
              As an example, important metrics to understand website performance include:
              <ul>
                <li>Overall site traffic – how many unique visitors per week/month</li>
                <li>Bounce rate – how often are visitors immediately leaving or “bouncing” away from your website</li>
                <li>Page visits - how many pages do visitors view before they leave your site.</li>
              </ul>
            </p>
            <Row>
                <Col sm={6}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item" 
                            src="https://player.vimeo.com/video/646642479" 
                            width="640" 
                            height="360" 
                            frameBorder="0" 
                            allow="fullscreen" 
                            allowFullScreen
                            title="Metrics Case Study: Highlights Video" 
                        ></iframe>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item" 
                            src="https://player.vimeo.com/video/646671611" 
                            width="640" 
                            height="360" 
                            frameBorder="0" 
                            allow="fullscreen" 
                            allowFullScreen
                            title="Metrics Case Study: Email Newsletter" 
                        ></iframe>
                    </div>
                </Col>
            </Row>
            <h3 className="mt-5">Selecting Your Tools of Measurement</h3>
            <p>
                As you determine the metrics you need to assess digital performance, you may also need specific tools to be able to track them.
            </p>
            <p>
                For example, if your campaigns are just designed to increase awareness, then you Google Analytics has a lot to offer. But if you’re looking to dive deeper into specific channels and specific KPIs, then you might need a more specific tool, like Veeva CRM.
            </p>
            <p>
                Talk to your Commercial Operations colleagues today and find out what tools are available to you. If you have a good enough understanding of your goals and the metrics that will define your performance, then choosing the right tools will be much easier.
            </p>
          </Container>
        </Row>
        <Row className="light-bg section" id="">
          <Container>
            <AnimatedHeader svg="metrics-advice-bug" title="Advice From Metrics @ Gilead Pros"/>
            <Row>
              { advicers.map((advicer) => (
                <Col md={4} className="pros">
                  <AdvicerMessage advicer={advicer} />
                </Col>
              ))} 
            </Row>
          </Container>
        </Row>
      </Layout>
    )
}
