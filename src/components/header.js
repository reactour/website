import PropTypes from 'prop-types'
import React from 'react'
import { colors } from './styles'
import BannerImage from './bannerImage'

const headerWrapperStyle = {
  background: colors.primary,
  marginBottom: 0,
  height: '300px',
}

const headerStyle = {
  margin: '0 auto',
  width: '300px',
  height: '300px',
}

const Header = ({ siteTitle }) => (
  <div
    style={headerWrapperStyle}
  >
    <div style={headerStyle}>
      <BannerImage />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
