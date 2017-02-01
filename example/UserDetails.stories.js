/* @flow */
import React from 'react';
// $FlowFixMe
import { storiesOf } from '@kadira/storybook';

import UserDetails from './UserDetails';
import type { User } from './UserDetails';

const user: User = {
  id: 1,
  name: 'Joe',
};

storiesOf('UserDetails', module)
.addWithDoc('default', UserDetails,
  'It should render given user info',
  () => <UserDetails user={user} num={42} />
)
;
