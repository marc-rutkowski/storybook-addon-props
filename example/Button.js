import React from 'react'
import PropTypes from 'prop-types'

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
}

/** A simple Button */
const Button = ({ children, onClick }) => (
  <button style={buttonStyles} onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Click handler */
  onClick: PropTypes.func,
  /** testOneOf */
  testOneOf: PropTypes.oneOf(['default', 'positive']),
  /** testOneOfType */
  testOneOfType: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Button.defaultProps = {
  children: 'OK',
}

export default Button
