import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

/** A simple Button */
const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  /** Button content */
  children: React.PropTypes.node.isRequired,
  /** Click handler */
  onClick: React.PropTypes.func,
  /** testOneOf */
  testOneOf: React.PropTypes.oneOf(['default', 'positive']),
  /** testOneOfType */
  testOneOfType: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
};

Button.defaultProps = {
  children: 'OK',
};

export default Button;
