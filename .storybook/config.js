import { configure, setAddon } from '@kadira/storybook';
// in your project replace to:
// import addWithDoc from 'storybook-addon-props'
import addWithDoc from '../src';

setAddon(addWithDoc);

const req = require.context('../example', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
