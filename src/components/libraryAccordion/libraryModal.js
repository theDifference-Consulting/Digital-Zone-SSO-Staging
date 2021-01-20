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
				<span>{item.project}</span><br/>
				Audience: <b>{item.audience}</b><br/>
				Date: <b>{item.date}</b>
			</Modal.Header>
			<Modal.Body>
				<div className="summary">
					<span>Summary:</span>
					<ul>
					{item['summary'].map((item, idx) => (
						<li>• {item.content}</li>
						))}
					</ul>
				</div>
				Want to know more?<br/>
				<a href={"mailto:"+item.contactEmail} target="_blank" rel="noreferrer" style={{fontWeight:'bold', fontSize:'20px'}}>
					<img src="/img/right-triangle.svg" style={{height:'18px', marginRight: '8px'}}/>
					Contact: {item.contactName}
				</a>
			</Modal.Body>
		</Modal>
	</>
  );
}
