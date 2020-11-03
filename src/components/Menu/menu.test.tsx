import React from 'react'
import Menu, { MenuProps } from "./Menu"
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { render, fireEvent, RenderResult, cleanup, wait } from '@testing-library/react'

const testProps: MenuProps = {
  defaultIndex: "0",
  className: 'test',
  onSelect: jest.fn()
}

const testVerticalProps: MenuProps = {
  defaultIndex: "0",
  mode: 'vertical',
}

const generateMenu = (props: MenuProps) => {
  return (
    <>
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
      <SubMenu title='kipTitle'>
        <MenuItem>
          subMenu1
        </MenuItem>
      </SubMenu>
    </Menu>
    </>
  )
}

const createStyleFile = () => {
  const cssFile: string = `
    .kip-submenu {
      display: none;
    }
    .kip-submenu.menu-opened{
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem based on default props', () => {
  // 通用函数
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    wrapper.container.append(createStyleFile())
    //  wrapper.container // element
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')

  })
  it('should render correct Menu and MenuItem base on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('kip-menu test')
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3)  // 判断li 是否有3个
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })

  it('click items shoud change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('menu-item is-active')  //点击元素是否存在active
    expect(activeElement).not.toHaveClass('menu-item is-active')  // 选中元素当前没有 active
    expect(testProps.onSelect).toHaveBeenCalledWith('2')  // 下标2
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')    // 禁用的元素是否有active
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')  // 下标1
  })

  it('should render vertical mode when mode is set to vertical', () => {
    cleanup() // 清除之前的，否则这里est-menu 重复
    const wrapper = render(generateMenu(testVerticalProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })

  it('should show subMenu1 items when hover on subMenu', async () => {
    expect(wrapper.queryByText('subMenu1')).not.toBeVisible()
    const kipElement = wrapper.getByText('kipTitle')
    fireEvent.mouseEnter(kipElement)
    //  expect(wrapper.queryByText('subMenu1')).toBeVisible()  // 设定了 300毫秒 所以出错
    await wait(() => {
      expect(wrapper.queryByText('subMenu1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('subMenu1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')

    fireEvent.mouseLeave(kipElement)
    await wait(() => {
      expect(wrapper.queryByText('subMenu1')).not.toBeVisible()
    })
  })

})