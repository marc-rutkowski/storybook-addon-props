import React from 'react';
import addons from '@kadira/storybook-addons';
import { ADD_EVENT } from './constants';
import jsxToString from 'jsx-to-string';

const withDoc = (component, title, storyFn) => {
  const channel = addons.getChannel();

  return function({ kind, story }) {
    const renderedStory = storyFn();

    channel.emit(ADD_EVENT, {
      kind,
      storyName: story,
      data: {
        kind, story, title,
        info: component.__docgenInfo,
        name: component.name,
        source: jsxToString(renderedStory),
      },
    });

    return renderedStory;
  }
};

export default withDoc;
