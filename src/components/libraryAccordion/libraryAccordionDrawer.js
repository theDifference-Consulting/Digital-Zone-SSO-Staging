import React from 'react';
import {Col, Card, Button} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import LibraryModal from "./libraryModal.js"

const LibraryAccordionDrawer = ({data, lower, upper, ...props}) => {

	function alphaFilter(value, lowerAlpha, upperAlpha) {
		return value.filter(function(e) {
			let val = e.Country.charAt(0).toLowerCase()
			return  val >= lowerAlpha && val <= upperAlpha
		})
	}

	let tally = alphaFilter(data, lower, upper).length;

	return (
		<>
		<Col md={4}>
			<Accordion>
				<Card>
					<Accordion.Collapse eventKey="0" >
					    <div>
					    {alphaFilter(data, lower, upper).slice(0,(tally / 3)).map((item, idx) => (
		  						<LibraryModal listItem={item} key={item+"_"+idx}/>
							))}
					  	</div>
					</Accordion.Collapse>
					<Card.Header>
					  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="drawer-face">
					        <img src="/img/drawer-face.svg"/>
					  </Accordion.Toggle>
					</Card.Header>
				</Card>
			</Accordion>
		</Col>
		<Col md={4}>
			<Accordion>
				<Card>
					<Accordion.Collapse eventKey="0" >
					    <div>
					    {alphaFilter(data, lower, upper).slice((tally / 3),(tally * 2 / 3)).map((item, idx) => (
		  						<LibraryModal listItem={item} key={item+"_"+idx}/>
							))}
					  	</div>
					</Accordion.Collapse>
					<Card.Header>
					  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="drawer-face">
					        <img src="/img/drawer-face.svg"/>
					  </Accordion.Toggle>
					</Card.Header>
				</Card>
			</Accordion>
		</Col>
		<Col md={4}>
			<Accordion>
				<Card>
					<Accordion.Collapse eventKey="0" >
					    <div>
					    {alphaFilter(data, lower, upper).slice((tally * 2 / 3),tally).map((item, idx) => (
		  						<LibraryModal listItem={item} key={item+"_"+idx}/>
							))}
					  	</div>
					</Accordion.Collapse>
					<Card.Header>
					  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="drawer-face">
					        <img src="/img/drawer-face.svg"/>
					  </Accordion.Toggle>
					</Card.Header>
				</Card>
			</Accordion>
		</Col>
		</>
	)
}

export default LibraryAccordionDrawer;