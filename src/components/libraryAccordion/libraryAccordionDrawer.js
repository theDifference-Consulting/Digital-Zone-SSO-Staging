import React from 'react';
import {Card, Button} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import LibraryModal from "./libraryModal.js"

const LibraryAccordionDrawer = ({data, img, ...props}) => {
	return (
		<Accordion>
			<Card>
				<Accordion.Collapse eventKey="0" >
				    <div>
				    {data.map((item, idx) => (
	  						<LibraryModal listItem={item} key={item+"_"+idx}/>
	  						))}
				  	</div>
				</Accordion.Collapse>
				<Card.Header>
				  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="drawer-face">
				        <img src={img}/>
				  </Accordion.Toggle>
				</Card.Header>
			</Card>
		</Accordion>
	)
}

export default LibraryAccordionDrawer;