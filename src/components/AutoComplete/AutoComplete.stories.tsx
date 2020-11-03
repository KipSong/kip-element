import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import AutoComplete, { AutoComleteProps } from './AutoComplete';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete
} as Meta;

const Template: Story<AutoComleteProps> = (args) => {
  return <AutoComplete {...args} />;
}

export const Default = Template.bind({});
