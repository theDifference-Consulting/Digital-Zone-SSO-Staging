import React from "react"
import PropTypes from 'prop-types'
import { Row, Col, Container, Nav, Tab } from "react-bootstrap"
import "./advicerMessage.scss"
import { LilCubes } from "../lilCubes"

export const AdvicerMessage = ({ advicer }) => (
  <Container className="advicer-message">
    <Row className="headshot__text">
      <div>
        <h3>
          { advicer.name }
        </h3>
        {advicer.title}<br/>{advicer.country}
        <LilCubes left="-8px" top="-8px" />
        <LilCubes left="-6px" bottom="-34px" />
        <LilCubes left="14px" bottom="-21px" />
        <LilCubes right="20px" top="-8px" />
        <LilCubes right="16px" bottom="-40px" />
      </div>
    </Row>
    <Row className="headshot__image">
      <img 
          alt={`${advicer.name}, ${advicer.title} headshot`}
          srcSet={`${advicer.img}-1.jpg 300w, ${advicer.img}-3.jpg 600w`}
          src={`${advicer.img}-3.png}`}
          sizes="(max-width: 300px) 200px, 100%"
      />
    </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
      <Row className="advicer-message__messages">
        <Col md={12}>
          <Nav variant="pills justify-content-between d-flex">
          { advicer.messages.slice(0,5).map((_, i) => ( // slice to ensure no more than 5
            <Nav.Item key={i}>
              <Nav.Link eventKey={i}>{i+1}</Nav.Link>
            </Nav.Item>
          ))} 
          </Nav>
        </Col>
      </Row>
      <Row className="advicer-message__messages">
        <Col md={12}>
          <Tab.Content>
            { advicer.messages.map((message, i) => (
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

AdvicerMessage.propTypes = {
  advicer: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}
