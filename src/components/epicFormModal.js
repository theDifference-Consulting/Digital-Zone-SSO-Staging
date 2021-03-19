import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

export default function LibraryModal({listItem}) {
	let item = listItem;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  return (
  	<>
	  	<div className="giant-button" onClick={handleShow}>
	  	GET STARTED NOW!
	  	</div>
	  	<Modal 
				show={show} 
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="epic-quest"
			>
			<Modal.Header closeButton>
			</Modal.Header>
			<Modal.Body>
				<iframe 
					src="https://docs.google.com/forms/d/e/1FAIpQLScp-QGx_xXvMzrVZP5u8CPlM-USOuJtMZO2NphHYJGOtFFuwQ/viewform?embedded=true" 
					width="640" 
					height="940" 
					frameborder="0" 
					marginheight="0" 
					marginwidth="0"
					>
					Loading…
				</iframe>
			</Modal.Body>
		</Modal>
	</>
  );
}
