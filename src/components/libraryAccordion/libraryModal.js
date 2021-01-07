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
	  	<div className="card-wrapper" onClick={handleShow}>
			<img src={"/img/"+item.countryFlag} alt="country flag" className="country-flag"/>
			<h5 >{item.project}</h5>
			Audience: <b>{item.audience}</b><br/>
			Date: <b>{item.date}</b><br/>
	  	</div>
	  	<Modal 
			show={show} 
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
			  	<img src={"/img/"+item.countryFlag} alt="country flag" className="country-flag"/>
				{item.project}
			</Modal.Header>
			<Modal.Body>
				<a href={item.fileName} target="_blank" rel="noreferrer" className="download-button">
					<img src="/img/download.svg"/>
					Download<br/>
					Materials
				</a>
				Audience: <b>{item.audience}</b><br/>
				Date: <b>{item.date}</b><br/>
				Summary:<ul>
				{item['summary'].map((item, idx) => (
					<li>{item.content}</li>
					))}
				</ul>
				<a href={"mailto:"+item.contactEmail} target="_blank" rel="noreferrer" style={{fontWeight:'bold'}}>
					<img src="/img/right-triangle.svg" style={{height:'18px', marginRight: '8px'}}/>
					Contact: {item.contactName}
				</a>
			</Modal.Body>
		</Modal>
	</>
  );
}
