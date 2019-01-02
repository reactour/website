import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/layout.scss'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'reacTour arranges introductory web application building workshops for minorities' },
            { name: 'keywords', content: 'web applications, react, coaching, workshop, minorities' },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Lato|Roboto" rel="stylesheet"></link>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
          className="container-fluid"
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
