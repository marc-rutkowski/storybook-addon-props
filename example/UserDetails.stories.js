/* @flow */
import React from 'react';
// $FlowFixMe
import { storiesOf } from '@storybook/react';
import { fromJS } from 'immutable';

import UserDetails from './UserDetails';
import type { User } from './UserDetails';

const user: User = {
  id: 1,
  name: 'Joe',
};

const imm = fromJS({
  test: 'abc',
});

storiesOf(
  'UserDetails',
  module
).addWithDoc('default', UserDetails, 'It should render given user info', () =>
  <UserDetails user={user} num={42} imm={imm} />
);
