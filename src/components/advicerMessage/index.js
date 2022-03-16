import React from "react"
import PropTypes from 'prop-types'
import { Row, Col, Container, Nav, Tab } from "react-bootstrap"
import "./adviserMessage.scss"
import { AdviserHeadshot } from "../adviserHeadshot"

export const AdviserMessage = ({ adviser }) => (
  <Container className="adviser-message">
    <AdviserHeadshot adviser={adviser} />
    <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
      <Row className="adviser-message__messages">
        <Col md={12}>
          <Nav variant="pills justify-content-between d-flex">
          { adviser.messages.slice(0,5).map((_, i) => ( // slice to ensure no more than 5
            <Nav.Item key={i}>
              <Nav.Link eventKey={i}>{i+1}</Nav.Link>
            </Nav.Item>
          ))} 
          </Nav>
        </Col>
      </Row>
      <Row className="adviser-message__messages">
        <Col md={12}>
          <Tab.Content>
            { adviser.messages.map((message, i) => (
              <Tab.Pane eventKey={i} key={message}>
                { message }
              </Tab.Pane>
            ))} 
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
)

AdviserMessage.propTypes = {
  adviser: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}
