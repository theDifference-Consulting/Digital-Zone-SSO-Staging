import React from 'react'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import AccordionDrawer from './libraryAccordionDrawer'
import {HIV, LiverDiseases, Inflammation} from "./libraryAccordion.json"
import "./libraryAccordion.css"

const LibraryAccordion = () => {
	return (
		<div className="drawer-wrapper">
			<Container>
				<Row >
					<Col xs={12}>
						<img src="/img/inflam.svg" className="cardCategory" />
					</Col>
					<Col md={4}>
						<AccordionDrawer data={HIV[0].AG} img="/img/AG-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={HIV[0].HP} img="/img/HP-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={HIV[0].QZ} img="/img/QZ-face.svg"/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/hiv.svg" className="cardCategory" />
					</Col>
					<Col md={4}>
						<AccordionDrawer data={LiverDiseases[0].AG} img="/img/AG-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={LiverDiseases[0].HP} img="/img/HP-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={LiverDiseases[0].QZ} img="/img/QZ-face.svg"/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/liver.svg" className="cardCategory" />
					</Col>
					<Col md={4}>
						<AccordionDrawer data={Inflammation[0].AG} img="/img/AG-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={Inflammation[0].HP} img="/img/HP-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={Inflammation[0].QZ} img="/img/QZ-face.svg"/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default LibraryAccordion