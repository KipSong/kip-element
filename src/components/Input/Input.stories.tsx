import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from './Input';

export default {
  title: 'Example/Input',
  component: Input
} as Meta;

const Template: Story<InputProps> = (args) => <Input style={{ width: '420px' }} {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '默认的Input'
}

export const Search = Template.bind({});
Search.args = {
  placeholder: 'search',
  icon:'search'
}

export const Prepend = Template.bind({});
Prepend.args = {
  placeholder: 'append',
  prepend: 'http://'
}

export const Append = Template.bind({});
Append.args = {
  placeholder: 'append',
  append: '.com',
}