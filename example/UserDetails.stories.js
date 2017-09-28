import React from 'react'
import { storiesOf } from '@storybook/react'
import { fromJS } from 'immutable'

import UserDetails from './UserDetails'
import type { User } from './UserDetails'

const user: User = {
  id: 1,
  name: 'Joe',
}

const imm = fromJS({
  test: 'abc',
})

storiesOf(
  'UserDetails',
  module
).addWithDoc(
  'default',
  UserDetails,
  'It should display props info extracted from [Flow](https://flow.org/) annotations',
  () => <UserDetails user={user} num={42} imm={imm} />
)
