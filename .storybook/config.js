import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'Storybook',
  url: 'https://github.com/storybooks/react-storybook',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false
});

function loadStories() {
  require('../example/stories');
}

configure(loadStories, module);
