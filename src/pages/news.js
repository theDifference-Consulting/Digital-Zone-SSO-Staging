import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"
import BlogRoll from '../components/blogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
    <>
    <Helmet>
        <title>Gilead Digital Zone — News</title>
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
    	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
    </Helmet>
    <main class="secondary-template">
        <div class="container-fluid news">
            <Navbar/>
            <header>
                <div class="container">
                    <div class="heading-cloud-wrapper row">
                        <h1>News</h1>
                    </div>
                </div>
            </header>

			<React.Fragment>
				<BlogRoll />
			</React.Fragment>
            <footer>
                <div class="container">
                    <div class="copyright">©2020 Gilead</div>
                </div>
            </footer>
            <a href="/" id="back-compass"></a>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
    </main>
    </>
  )
}
}