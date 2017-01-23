import React from 'react';
import styled from 'styled-components';
import PropsTableRow from './PropsTableRow';

const Table = styled.table`
  border: 1px solid grey;
  border-spacing: 0;
  th {
    background-color: lightgrey;
    border: 1px solid grey;
    padding: 4px 16px;
  }
  td {
    border: 1px solid grey;
    border-spacing: 0;
    padding: 4px 16px;
  }
`;

export const PropsTable = ({ props }) => (
  <Table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
        <th>Values</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      {
        Object.keys(props).sort().map((name) =>
          <PropsTableRow key={name} name={name} prop={props[name]} />
        )
      }
    </tbody>
  </Table>
);

export default PropsTable;
