module.exports = {
  siteMetadata: {
  title: "My Gatsby Site",
  description: "A simple site built with Gatsby",
  author: "Fiza Amjad"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    "gatsby-transformer-remark",
  ],
  plugins: ["gatsby-plugin-react-helmet"],
  pathPrefix: "static-site-gatsby",
 };