/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  	`gatsby-plugin-react-helmet`,
  	{
    resolve: `gatsby-plugin-html-comments`,
    options: {
      files: ['./public/**/*.html', './public/*.html'],
      comment: [
        {
          regexp: /<keep-this-comment-tag>(.*?)<\/keep-this-comment-tag>/g,
          comment: `<!-- keep this comment -->`,
          },
      ]
    }
  }
  ],
}
