import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from './Menu';
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export default {
  title: 'Example/Menu',
  component: Menu,
  subcomponents: { MenuItem, SubMenu },
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <Menu {...args}>
    <MenuItem>
      导航菜单1
    </MenuItem>
    <MenuItem>
      导航菜单2
    </MenuItem>
    <MenuItem>
      导航菜单3
    </MenuItem>

    <SubMenu title='菜单'>
      <MenuItem disabled>
        导航子菜单1
      </MenuItem>
      <MenuItem>
        导航子菜单2
      </MenuItem>
      <MenuItem>
        导航子菜单3
      </MenuItem>
    </SubMenu>
  </Menu>);

export const Horizontal = Template.bind({});
Horizontal.args = {
  mode: 'horizontal'
}

export const Vertical = Template.bind({});
Vertical.args = {
  mode: 'vertical'
}