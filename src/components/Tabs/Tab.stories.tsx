import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Tabs, { TabsProps } from './Tabs';
import TabsItem from './TabsItem'

export default {
  title: 'Example/Tabs',
  component: Tabs,
  subcomponents: { TabsItem },
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} >
  <TabsItem label='tab 1'>
    Content of Tab Pane 1
  </TabsItem>
  <TabsItem label='tab 2'>
    Content of Tab Pane 2
  </TabsItem>
  <TabsItem label='tab 3'>
    Content of Tab Pane 3
  </TabsItem>
</Tabs>;

export const Line = Template.bind({});
Line.args={
  type:'line'
}

export const Card = Template.bind({});
Card.args={
  type:'card'
}

