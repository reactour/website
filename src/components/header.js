import PropTypes from 'prop-types'
import React from 'react'
import { colors } from './styles'

const headerWrapperStyle = {
  background: colors.primary,
  marginBottom: 0,
  height: '40vh',
}

const headerStyle = {
  color: colors.text.primary,
  textAlign: 'center',
  position: 'relative',
  top: '40%',
  fontSize: '4rem',
}

const Header = ({ siteTitle }) => (
  <div
    style={headerWrapperStyle}
  >
    <h1 style={headerStyle}>
        {siteTitle}
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
