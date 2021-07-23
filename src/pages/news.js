import React from "react"
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