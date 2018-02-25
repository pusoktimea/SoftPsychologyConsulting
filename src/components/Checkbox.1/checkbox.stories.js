import React from 'react';
import {setAddon, storiesOf} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

import Checkbox from './index';
import Label from '../Label/index';

setAddon(JSXAddon);
const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addWithJSX('Checkbox', () => (
  <Label>
    <Checkbox
      name="test_checkbox"
      disabled={boolean('Disabled', false)}
    />
    Test label
  </Label>
));
