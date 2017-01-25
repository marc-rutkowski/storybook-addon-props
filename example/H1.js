import React from 'react';

const style = {
  fontSize: '2em',
  marginBottom: '0.25em',
};

/** Simple header */
const H1 = ({ children }) => (<h1 style={style}>{children}</h1>);
H1.propTypes = {
  /** Header content */
  children: React.PropTypes.node.isRequired,
};

export default H1;
