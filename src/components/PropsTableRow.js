import React from 'react';
import FlowTypeProp from './FlowTypeProp';

const tdStyle = {
  border: '1px solid grey',
  borderSpacing: 0,
  padding: '4px 16px',
};

const propNameStyle = required => ({
  ...tdStyle,
  font: '12px Consolas, "Liberation Mono", Menlo, Courier, monospace',
  fontWeight: required ? 'bold' : 'inherit',
});

const unionValues = values => values.map(v => <li key={v.name}>{v.name}</li>);
const propTypeName = prop => {
  if (prop && prop.type) {
    if (prop.type.value && prop.type.name === 'union') {
      return (
        <span>
          <span>one of type:</span>
          <ul>{unionValues(prop.type.value)}</ul>
        </span>
      );
    }
    return prop.type.name;
  }
  if (prop && prop.flowType) {
    return <FlowTypeProp flowType={prop.flowType} />;
  }
};
const enumValues = values => values.map(v => <li key={v.value}>{v.value}</li>);
const propTypeValue = prop => {
  if (prop.type && prop.type.value && prop.type.name === 'enum') {
    return <ul>{enumValues(prop.type.value)}</ul>;
  }
};

export const PropTableRow = ({ name, prop }) => {
  return (
    <tr>
      <td style={propNameStyle(prop.required)}>{name}</td>
      <td style={tdStyle}>{propTypeName(prop)}</td>
      <td style={tdStyle}>{prop.required ? 'yes' : 'no'}</td>
      <td style={tdStyle}>{prop.description}</td>
      <td style={tdStyle}>{propTypeValue(prop)}</td>
      <td style={tdStyle}>{prop.defaultValue && prop.defaultValue.value}</td>
    </tr>
  );
};

export default PropTableRow;
