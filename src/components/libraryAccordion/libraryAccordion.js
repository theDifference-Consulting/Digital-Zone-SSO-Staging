import React from 'react'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import AccordionDrawer from './libraryAccordionDrawer'
import {AG, HP, QZ} from "./libraryAccordionInflam.json"
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
						<AccordionDrawer data={AG} img="/img/AG-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={HP} img="/img/HP-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={QZ} img="/img/QZ-face.svg"/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/hiv.svg" className="cardCategory" />
					</Col>
					<Col md={4}>
						<AccordionDrawer data={AG} img="/img/AG-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={HP} img="/img/HP-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={QZ} img="/img/QZ-face.svg"/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/liver.svg" className="cardCategory" />
					</Col>
					<Col md={4}>
						<AccordionDrawer data={AG} img="/img/AG-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={HP} img="/img/HP-face.svg"/>
					</Col>
					<Col md={4}>
						<AccordionDrawer data={QZ} img="/img/QZ-face.svg"/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default LibraryAccordion