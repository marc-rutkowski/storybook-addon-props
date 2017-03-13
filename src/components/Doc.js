import React from 'react';
import styled from 'styled-components';
import PropsTable from './PropsTable';

const Container = styled.div`
  padding: 0 12px;
`;
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
    <Container>
      <ComponentName>{name}</ComponentName>
      { info && <Description>{info.description}</Description> }
      { info && <PropsTable props={info.props} /> }
    </Container>
  );
}

export default Doc;
