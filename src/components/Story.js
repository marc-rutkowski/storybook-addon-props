import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import { docco } from 'react-syntax-highlighter/dist/styles';

registerLanguage('javascript', js);

const Container = styled.div`
  padding: 0 12px;
`;


export const Story = ({ data }) => {
  const { name, storyName, description, source } = data;
  return (
    <Container>
      <p><b>{name}</b> {storyName}</p>
      <em>{description}</em>
      <h2>Code</h2>
      <SyntaxHighlighter language='javascript' style={docco}>{source}</SyntaxHighlighter>
    </Container>
  );
}

export default Story;