import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withDoc from '../../src/withDoc';

import Button from '../components/button';

storiesOf('Button', module)
.add('with label', withDoc(Button,
    `It should render a button with a label`,
    () => <Button onClick={action('clicked')}>Hello Button</Button>
))
.add('with some emoji', withDoc(Button,
    `It should render a button with emoji`,
    () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
))
.add('with a label and an icon', withDoc(Button,
    `It should render a button with a label and an emoji`,
    () => <Button onClick={action('clicked')}>Settings ⚙️</Button>
));
