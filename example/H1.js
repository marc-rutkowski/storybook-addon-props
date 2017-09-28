import React from 'react'
import PropTypes from 'prop-types'

const style = {
  fontSize: '2em',
  marginBottom: '0.25em',
}

/** Simple header */
const H1 = ({ children }) => <h1 style={style}>{children}</h1>
H1.propTypes = {
  /** Header content */
  children: PropTypes.node.isRequired,
}

export default H1
