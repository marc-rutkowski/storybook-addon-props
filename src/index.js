import React from 'react'
import addons from '@storybook/addons'
import { ADD_EVENT } from './constants'
import jsxToString from 'jsx-to-string'

export function configureDoc(options) {
  return {
    addWithDoc(storyName, component, description, storyFn) {
      return this.add(storyName, context => {
        const channel = addons.getChannel()
        const renderedStory = storyFn(context)
        if (channel) {
          const info =
            component.__docgenInfo &&
            component.__docgenInfo.length > 0 &&
            component.__docgenInfo[0]
          channel.emit(ADD_EVENT, {
            kind: context.kind,
            storyName,
            data: {
              storyName,
              description,
              options,
              info,
              name: component.name,
              source: jsxToString(renderedStory),
            },
          })
        }

        return renderedStory
      })
    },
  }
}

export default configureDoc()
