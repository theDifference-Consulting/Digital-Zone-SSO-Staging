import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'

	function linkCheck(linkHref, text) {
		if (linkHref) {
			return (
    		<a href={"mailto:" + linkHref} target="_blank" rel="noreferrer" style={{fontWeight:'bold', fontSize:'20px'}}>
					<img src="/img/right-triangle.svg" style={{height:'18px', marginRight: '8px'}} alt="right triangle"/>
					Contact: {text}
				</a>
    	)
  	} else {
  		return (
  			<div>
	  			<img src="/img/right-triangle.svg" style={{height:'18px', marginRight: '8px'}} alt="right triangle"/>
	  			<span style={{fontWeight:'bold', fontSize:'20px'}}>Contact: {text}</span>
  			</div>
  		)
  	}
	}

export default function LibraryModal({listItem}) {
	let item = listItem;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  return (
  	<>
	  	<div className="card-wrapper" onClick={handleShow} aria-hidden="true" >
				<img src={"/img/"+item.Image+".svg"} alt={item.Country + " flag"} className="country-flag"/>
				<h5 >{item["Project Name"]}</h5>
				Audience: <b>{item.Audience}</b><br/>
				Date: <b>{item.Date}</b><br/>
	  	</div>
	  	<Modal 
        show={show} 
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
			<Modal.Header closeButton>
				<div className="countryTab">{item.Country}</div>
		  	<img src={"/img/"+item.Image+".svg"} alt={item.Country + " flag"} className="country-flag"/>
				<span>{item["Project Name"]}</span><br/>
				Audience: {item.Audience}<br/>
				Date: {item.Date}
			</Modal.Header>
			<Modal.Body>
				<div className="summary">
					<span>Summary:</span>
						<p>{item.Summary}</p>
				</div>
				Want to know more?<br/>
				{linkCheck(item["Contact Email"], item.Contact)}
			</Modal.Body>
		</Modal>
	</>
  );
}
