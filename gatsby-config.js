/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  	`gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
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
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/_posts/news`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
      trackingId: `UA-167767244-1`,
    },
  },
  `gatsby-transformer-remark`,
  {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
  ],
}
