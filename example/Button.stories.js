import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from './Button';

storiesOf('Button', module)
.addWithDoc('with label', Button,
  'It should render a button with a label (sample link to tracker #3)',
  () => <Button onClick={action('clicked')}>Hello Button</Button>
)
.addWithDoc('with some emoji', Button,
  'It should render a button with emoji',
  () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
)
.addWithDoc('with a label and an icon', Button,
  'It should render a button with a label and an emoji',
  () => <Button onClick={action('clicked')}>Settings ⚙️</Button>
);
