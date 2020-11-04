import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import AutoComplete, { AutoCompleteProps } from './AutoComplete';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete
} as Meta;

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items)
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
}

const Template: Story<AutoCompleteProps> = (args) => {
  return <AutoComplete style={{width:'400px'}} {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  placeholder:'请输入您的gitHub昵称',
  fetchSuggestions:handleFetch
}
