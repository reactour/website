import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

 const bannerImageStyle = {
   height: '100%',
 }

const BannerImage = () => (
  <StaticQuery
    query={graphql`
      query {
        bannerImage: file(relativePath: { eq: "reactour_whitenblue.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 300, height:300){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img style={bannerImageStyle} fixed={data.bannerImage.childImageSharp.fixed} />}
  />
)
export default BannerImage
