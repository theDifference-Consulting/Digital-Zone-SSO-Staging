import React from "react"
import Layout from "../components/layout"
import {Container} from "react-bootstrap"

export default function index() {
    return (
        <Layout pageName="404" activePage=" " containerClass=" ">
            <Container style={{marginTop: "60px", marginBottom: "40%"}}>
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </Container>
        </Layout>
	)
}