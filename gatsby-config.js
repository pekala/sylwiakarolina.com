module.exports = {
  siteMetadata: {
    title: 'Sylvia Dluzniewska',
    subtitle: 'Front End Developer'
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components', {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300, 400, 500`,
          `AmericanTypewriter`,
          `Gloria Hallelujah`
        ]
      }
    }
  ],
}
