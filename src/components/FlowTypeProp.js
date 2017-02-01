import React from 'react';

const FlowTypeProp = ({ flowType }) => {
  switch (flowType.name) {
    case 'signature':
    case 'Array':
      return (<div>
        <pre>{flowType.raw}</pre>
        <pre>
          {flowType.elements && flowType.elements.map(t => <FlowTypeProp key={t.name} flowType={t} />)}
        </pre>
      </div>);
      break;

    default:
      return (<pre>{flowType.name}</pre>);
  }
};

export default FlowTypeProp;
