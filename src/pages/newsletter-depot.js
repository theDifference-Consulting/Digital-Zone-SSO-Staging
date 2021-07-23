import React from "react"
import newsletter from "../components/newsletter"
import Layout from "../components/layout"
import {Container, Row} from "react-bootstrap"

export default function index() {
    return (
        <Layout pageName="Newsletter Depot" activePage='newsletter' containerClass="newsletter">
			<Row className="light-bg section" id="welcome">
                <Container>
                    <img src="../img/newsletter-bug.svg" className="bug" alt="bug icon"/>
                    <h2>Welcome!</h2>
                    <div style={{padding:'30px 0'}}>
                        Welcome to the Newsletter Depot! Here you can find a variety of helpful email templates that can be downloaded for use in any of your email campaign needs. Check out the video below to get the most out of this Zone. 
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            className="embed-responsive-item" 
                            src="https://player.vimeo.com/video/537391928" 
                            width="640" 
                            height="360" 
                            frameBorder="0" 
                            allow="fullscreen" 
                            allowFullScreen
                            title="Welcome to the Newsletter Depot"
                        ></iframe>
                    </div>
                </Container>
            </Row>
            <Row className="light-bg section" id="now-showing">
                <Container>
                    <img src="../img/newsletter-bug.svg" className="bug" alt="bug icon"/>
                    <h2> Templates</h2>
                    <div className="wood-background">
                        <Row className="templates">
                            {newsletter.map((item, idx) => (
                            <a href={"/media/newsletter/" + item.fileName} target="_blank" rel="noreferrer" className="col-md-6" key={item.fileName + '_' + idx}>
                                <img src={"/media/newsletter/" + item.img} className="img-fluid" alt={"newsletter background image" + item.fileName}/>
                            </a>
                            ))}
                        </Row>
                    </div>
                </Container>
            </Row>
            <Row className="light-bg section" id="now-showing">
                <Container>
                    <img src="../img/newsletter-bug.svg" className="bug" alt="bug icon"/>
                    <h2> Templates</h2>
                    <p>
                        Got a great template that you’d like to add to our collection? Upload it here! 
                        All templates must be in .doc or .docx format, compatible with Microsoft Word.
                    </p>
                    <a href="mailto:Mario.Garcia@gilead.com?cc=tina.raselli@gilead.com&subject=Digital%20Zone%20Newsletter%20Template%20Submission&body=Hi%20Mario%20and%20Tina,%20I%20found%20this%20great%20email%20template%20that%20I’d%20love%20to%20share%20on%20the%20Digital%20Zone.%0D%0DThank%20you,%0D[your name here]" className="btn block-highlight" style={{textTransform: "capitalize"}}>
                        submit your template for review
                    </a>
                </Container>
            </Row>
        </Layout>
	)
}