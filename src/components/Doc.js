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
  return (
    <Container>
      <ComponentName>{name}</ComponentName>
      { info && <Description>{info.description}</Description> }
      { info && <PropsTable props={info.props} /> }
      { !info && <a target="_blank" href="https://github.com/marc-rutkowski/storybook-addon-props/issues/1">Component metadata cannot be extracted</a> }
    </Container>
  );
}

export default Doc;
