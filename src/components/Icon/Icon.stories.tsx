import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Icon, { IconProps } from './Icon';

export default {
  title: 'Example/Icon',
  component: Icon
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args={
  icon:'coffee'
}

export const Primary = Template.bind({});

Primary.args = {
  icon:'coffee',
  theme: 'primary'
};

export const Large = Template.bind({});
Large.args = {
  icon:'coffee',
  theme: 'primary',
  size: 'lg'
};