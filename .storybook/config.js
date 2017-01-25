import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
// in your project replace to:
// import addWithDoc from 'storybook-addon-props'
import addWithDoc from '../src';

setAddon(addWithDoc);

setOptions({
  name: 'Storybook',
  url: 'https://github.com/storybooks/react-storybook',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false
});

const req = require.context('../example', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
