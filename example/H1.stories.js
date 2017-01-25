import React from 'react';
import { storiesOf } from '@kadira/storybook';

import H1 from './H1';

storiesOf('H1', module)
.addWithDoc('with label', H1,
  'It should render a header with a label',
  () => <H1>Header text</H1>
)
;
