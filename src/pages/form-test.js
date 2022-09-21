import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap";
import {Blocked} from '../components/blocked'

export default function index() {
    return <Blocked />
    return (
        <Layout pageName="form test" activePage=" " containerClass=" ">
            <Container style={{marginTop: "60px", marginBottom: "40%"}}>
				<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				  <input type="hidden" name="form-name" value="contact" />
				  <p>
				    <label>Your Name: <input type="text" name="name" /></label>   
				  </p>
				  <p>
				    <label>Your Email: <input type="email" name="email" /></label>
				  </p>
				  <p>
				    <label>Your Role: <select name="role[]" multiple>
				      <option value="leader">Leader</option>
				      <option value="follower">Follower</option>
				    </select></label>
				  </p>
				  <p>
				    <label>Message: <textarea name="message"></textarea></label>
				  </p>
				  <p>
				    <button type="submit">Send</button>
				  </p>
				</form>
            </Container>
        </Layout>
	)
}
