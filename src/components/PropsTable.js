import React from 'react';
import PropsTableRow from './PropsTableRow';

const tableStyle = {
  border: '1px solid grey',
  borderSpacing: 0,
};

const thStyle = {
  backgroundColor: 'lightgrey',
  border: '1px solid grey',
  padding: '4px 16px',
};

export const PropsTable = ({ props }) => (
  <table style={tableStyle}>
    <thead>
      <tr>
        <th style={thStyle}>Property</th>
        <th style={thStyle}>Type</th>
        <th style={thStyle}>Required</th>
        <th style={thStyle}>Description</th>
        <th style={thStyle}>Values</th>
        <th style={thStyle}>Default</th>
      </tr>
    </thead>
    <tbody>
      {props &&
        Object.keys(props)
          .filter(name => props[name].required)
          .sort()
          .map(name => (
            <PropsTableRow key={name} name={name} prop={props[name]} />
          ))}
      {props &&
        Object.keys(props)
          .filter(name => !props[name].required)
          .sort()
          .map(name => (
            <PropsTableRow key={name} name={name} prop={props[name]} />
          ))}
    </tbody>
  </table>
);

export default PropsTable;
