import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Alert, { AlertProps } from './Alert';

export default {
  title: 'Example/Alert',
  component: Alert
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} style={{ width: '800px' }} title='欢迎使用KipSong组件库' closable ></Alert>;

export const Default = Template.bind({});

Default.args = {
  type: 'default'
}

export const Success = Template.bind({});
Success.args = {
  type: 'success'
}

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger'
}