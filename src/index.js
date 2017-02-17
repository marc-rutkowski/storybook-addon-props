import React from 'react';
import addons from '@kadira/storybook-addons';
import { ADD_EVENT } from './constants';
import jsxToString from 'jsx-to-string';

export function configureDoc(options) {
  return {
    addWithDoc(storyName, component, description, storyFn) {
      const channel = addons.getChannel();

      return this.add(storyName, (context) => {
        const renderedStory = storyFn(context);
        channel && channel.emit(ADD_EVENT, {
          kind: context.kind,
          storyName,
          data: {
            storyName,
            description,
            options,
            info: component.__docgenInfo,
            name: component.name,
            source: jsxToString(renderedStory),
          },
        });

        return renderedStory;
      });
    }
  };
}

export default configureDoc();
