import React from 'react'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import AccordionDrawer from './libraryAccordionDrawer'
import ProjectData from "./libraryAccordion.json"
import "./libraryAccordion.css"

const LibraryAccordion = () => {
	return (
		<div className="drawer-wrapper">
			<Container style={{display: "flex",flexDirection: "column-reverse"}}>
				<Row>
					<Col xs={12}>
						<img src="/img/regions-qz.svg" className="cardCategory" />
					</Col>
						<AccordionDrawer data={ProjectData} lower={"q"} upper={"z"}/>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/regions-hp.svg" className="cardCategory" />
					</Col>
					<AccordionDrawer data={ProjectData} lower={"h"} upper={"p"}/>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/regions-ag.svg" className="cardCategory" />
					</Col>
					<AccordionDrawer data={ProjectData} lower={"a"} upper={"g"}/>
				</Row>
			</Container>
		</div>
	)
}

export default LibraryAccordion