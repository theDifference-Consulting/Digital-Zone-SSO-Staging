import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery, withPrefix } from 'gatsby'


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts &&
            posts.map(({ node: post }) => (
            <section className="light-bg row news-item">
              <div className="container">
                <img src="../img/news-bug.svg" className="bug"/>
                <h2>{post.frontmatter.title}</h2>
                <h5>{post.frontmatter.date}</h5>
                <p>
                  <div dangerouslySetInnerHTML={{__html: post.html}}/>
                </p>
              </div>
            </section>
          ))}
        </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              html
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)