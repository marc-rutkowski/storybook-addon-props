import React from 'react';
import styled from 'styled-components';
import PropsTable from './PropsTable';

const Container = styled.div`
  padding: 0 12px;
`;
const ComponentName = ({ children }) => <h2>{children}</h2>;
const Description = ({ children }) => <h3>{children}</h3>;
const Story = ({ children }) => <quote>{children}</quote>;

export const Doc = ({ data }) => {
  const { name, info } = data;
  return (
    <Container>
      <ComponentName>{name}</ComponentName>
      <Description>{info.description}</Description>
      <PropsTable props={info.props} />
    </Container>
  );
}

export default Doc;
