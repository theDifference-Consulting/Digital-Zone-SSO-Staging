import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import LibraryModal from "./libraryModal.js"
import {AG, HP, QZ} from "./libraryAccordion.json"
import "./libraryAccordion.css"

function libraryModal() {

  return (
	<b>Hello world!</b>
  );
}

const LibraryAccordion = () => {
	return (
		<Container>
			<Row className="drawer-wrapper">
				<Col md={4}>
					<Accordion>
						<Card>
							<Accordion.Collapse eventKey="0">
							    <div>
							    {AG.map((item, idx) => (
		      						<LibraryModal listItem={item}/>
		      						))}
							  	</div>
							</Accordion.Collapse>
							<Card.Header>
							  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="drawer-face">
							        <img src="/img/AG-face.svg"/>
							  </Accordion.Toggle>
							</Card.Header>
						</Card>
					</Accordion>
				</Col>
				<Col md={4}>
					<Accordion>
					  <Card>
					    <Accordion.Collapse eventKey="1">
					      <div>
							    {HP.map((item, idx) => (
		      						<LibraryModal listItem={item}/>
		      						))}
							  	</div>
					    </Accordion.Collapse>
					    <Card.Header>
					      <Accordion.Toggle as={Button} variant="link" eventKey="1" className="drawer-face">
					        <img src="/img/HP-face.svg"/>
					      </Accordion.Toggle>
					    </Card.Header>
					  </Card>
					</Accordion>
				</Col>
				<Col md={4}>
					<Accordion>
					  <Card>
					    <Accordion.Collapse eventKey="1">
					      <div>
							    {QZ.map((item, idx) => (
		      						<LibraryModal listItem={item}/>
		      						))}
							  	</div>
					    </Accordion.Collapse>
					    <Card.Header>
					      <Accordion.Toggle as={Button} variant="link" eventKey="1" className="drawer-face">
					        <img src="/img/QZ-face.svg"/>
					      </Accordion.Toggle>
					    </Card.Header>
					  </Card>
					</Accordion>
				</Col>
			</Row>
		</Container>
	)
}

export default LibraryAccordion