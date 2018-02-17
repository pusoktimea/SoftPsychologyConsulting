import React from 'react';
import {setAddon, storiesOf} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';

import Table from './index';
import TableColumn from './TableColumn';

const items = [
  {
    id: '1',
    col1: '11',
    col2: '12',
    col3: '13'
  }, {
    id: '2',
    col1: '21',
    col2: '22',
    col3: '23',
    hasSubData: true
  }, {
    id: '3',
    col1: '31',
    col2: '32',
    col3: '33'
  }
];

setAddon(JSXAddon);
const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addWithJSX('Table', () => (
  <Table
    condensed={boolean('Condensed', true)}
    striped={boolean('Striped', true)}
    hovered={boolean('Hovered', true)}
    bordered={boolean('Bordered', true)}
    items={items}
  >
    <TableColumn
      header="test"
      contentGetter="col1"
    />
    <TableColumn
      header="another header"
      contentGetter={(item) => item.col2}
    />
  </Table>
));
