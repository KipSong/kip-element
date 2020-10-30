import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary'
};

export const Danger = Template.bind({});
Danger.args = {
  btnType: 'danger'
};

export const Round = Template.bind({});
Round.args = {
  btnType: 'primary',
  shape: 'round'
};

export const Link = Template.bind({});
Link.args = {
  btnType: 'link',
  href: 'http://www.baidu.com'
};