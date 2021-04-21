import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"
import Layout from "../components/layout"

export default function index() {
    return (
        <Layout pageName="form test" activePage=" " containerClass=" ">
            <div className="container" style={{marginTop: "60px", marginBottom: "40%"}}>
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
            </div>
        </Layout>
	)
}