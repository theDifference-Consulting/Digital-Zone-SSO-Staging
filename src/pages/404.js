import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"
import Layout from "../components/layout"

export default function index() {
    return (
        <Layout pageName="404" activePage=" " containerClass=" ">
            <div className="container" style={{marginTop: "60px", marginBottom: "40%"}}>
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        </Layout>
	)
}