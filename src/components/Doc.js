import React from 'react';
import PropsTable from './PropsTable';

const ComponentName = ({ children }) => <h2>{children}</h2>;
const Description = ({ children }) => <h3>{children}</h3>;

export const Doc = ({ data }) => {
  const { name, info } = data;
  if (!info) {
    console.log(`
      It seems that component metadata cannot be extracted.
      Please review react-docgen guidelines for correct extraction.
      https://github.com/reactjs/react-docgen#guidelines-for-default-resolvers-and-handlers
    `);
  }
  return (
    <div style={{ padding: '0 12px' }}>
      <h2>{name}</h2>
      {info && <h3>{info.description}</h3>}
      {info && <PropsTable props={info.props} />}
    </div>
  );
};

export default Doc;
