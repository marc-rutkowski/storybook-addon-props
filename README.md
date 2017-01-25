# React Storybook Props Addon

This addon provides two new panels for the [Storybook](getstorybook.io) UI.
- **Props**. Shows component properties (extracted by [Storybook](https://voice.kadira.io/component-metadata-react-storybook-ac0b218a2203#.tuzb01kb6) using  [react-docgen](https://github.com/reactjs/react-docgen))

![snap1](./docs/snap1.png)

- **Story**. Shows story description and source code.

![snap2](./docs/snap2.png)

Visible information are similar to [Storybook Info](https://github.com/storybooks/react-storybook-addon-info) addon, but doesn't alter the output of the story into the preview area. This provides a better usage for the Storyshots feature because snapshot will only contains the rendered story.

### Install

`npm i storybook-addon-props --save-dev`

or (using Yarn) :

`yarn add storybook-addon-props --dev`

### Usage

#### Register addon into the *.storybook/addons.js* file ([view doc](https://getstorybook.io/docs/react-storybook/addons/using-addons))

```js
import '@kadira/storybook/addons';
import 'storybook-addon-props/register';
```

#### Set addon into the *.storybook/config.js* file

```js
import { configure, setAddon } from '@kadira/storybook';
import addWithDoc from 'storybook-addon-props';

setAddon(addWithDoc);

function loadStories() {
  // ...
}
configure(loadStories, module);
```

#### Write stories

Create your stories using the new `addWithDoc` function provided by this addon.

```jsx
import Button from '../Button';

storiesOf('Button', module)
.addWithDoc('with label', Button,
    'It should render a button with a label',
    () => <Button onClick={action('clicked')}>Hello Button</Button>
));
```

For another example, have a look at [this file](example/stories/index.js).

`addWithDoc` expects the following parameters:

`addWithDoc(storyName, component, description, storyFn)`

| Parameter     | Description                              |
| ------------- | :--------------------------------------- |
| `storyName`   | Name of the story (appears into the Left Panel) |
| `component`   | The main component of the story          |
| `description` | A string displayed into the Story panel  |
| `storyFn`     | The story rendering function             |
