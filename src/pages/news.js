import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"
import BlogRoll from '../components/blogRoll'
import Layout from '../components/layout'

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout pageName="News" activePage='news' containerClass="news">
    			<React.Fragment>
    				<BlogRoll />
    			</React.Fragment>
            </Layout>
        )
    }
}