import React from "react"
import PropTypes from 'prop-types'
import { Row, Col, Container, Nav, Tab } from "react-bootstrap"
import "./advicerMessage.scss"

export const AdvicerMessage = ({ advicer }) => (
  <Container className="advicer-message">
    <Row className="headshot-bg">
      <Col md={12} className="pros">
        <h3>
          { advicer.name }
        </h3>
        {advicer.title}<br/>{advicer.country}
        <img src={advicer.img} alt={`${advicer.name}, ${advicer.title} headshot`} />
      </Col>
    </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
      <Row className="advicer-message__messages">
        <Col md={12} className="pros">
          <Nav variant="pills justify-content-between d-flex">
          { advicer.messages.slice(0,5).map((_, i) => ( // slice to ensure no more than 5
            <Nav.Item>
              <Nav.Link eventKey={i}>{i+1}</Nav.Link>
            </Nav.Item>
          ))} 
          </Nav>
        </Col>
      </Row>
      <Row className="advicer-message__messages">
        <Col md={12} className="pros">
          <Tab.Content>
            { advicer.messages.map((message, i) => (
              <Tab.Pane eventKey={i}>
                { message }
              </Tab.Pane>
            ))} 
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
)

AdvicerMessage.propTypes = {
  advicer: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}
