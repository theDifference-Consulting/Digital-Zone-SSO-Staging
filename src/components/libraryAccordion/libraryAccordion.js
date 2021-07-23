import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import AccordionDrawer from './libraryAccordionDrawer'
import ProjectData from "./libraryAccordion.json"
import "./libraryAccordion.css"

const LibraryAccordion = () => {
	return (
		<div className="drawer-wrapper">
			<Container style={{display: "flex",flexDirection: "column-reverse"}}>
				<Row>
					<Col xs={12}>
						<img src="/img/regions-qz.svg" className="cardCategory" alt="q - z"/>
					</Col>
						<AccordionDrawer data={ProjectData} lower={"q"} upper={"z"}/>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/regions-hp.svg" className="cardCategory" alt="h - p"/>
					</Col>
					<AccordionDrawer data={ProjectData} lower={"h"} upper={"p"}/>
				</Row>
				<Row>
					<Col xs={12}>
						<img src="/img/regions-ag.svg" className="cardCategory" alt="a - g"/>
					</Col>
					<AccordionDrawer data={ProjectData} lower={"a"} upper={"g"}/>
				</Row>
			</Container>
		</div>
	)
}

export default LibraryAccordion