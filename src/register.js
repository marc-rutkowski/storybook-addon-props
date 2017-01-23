import React from 'react';
import addons from '@kadira/storybook-addons';
import { PropsPanel, StoryPanel } from './components/Panels';

const ADDON_ID = 'attractivemedia/storybook-addon-props';

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();

  addons.addPanel(`${ADDON_ID}/propsPanel`, {
    title: 'Props',
    render: () => <PropsPanel channel={channel} onStory={api.onStory} />
  });

  addons.addPanel(`${ADDON_ID}/storyPanel`, {
    title: 'Story',
    render: () => <StoryPanel channel={channel} onStory={api.onStory} />
  });
});
