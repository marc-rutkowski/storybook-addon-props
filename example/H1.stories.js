import React from 'react'
import { storiesOf } from '@storybook/react'

import H1 from './H1'

storiesOf(
  'H1',
  module
).addWithDoc(
  'with label',
  H1,
  'The PROPS pane should display props extracted from functional component',
  () => <H1>Header text</H1>
)
