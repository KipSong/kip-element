import React from 'react'
import Button, { ButtonProps } from './Button'

import { render, fireEvent } from '@testing-library/react'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'default',
  size: 'lg',
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the corrent defualt button', () => {
    const wrapper = render(<Button {...defaultProps}>Kip song</Button>)
    const element = wrapper.getByText('Kip song')
    expect(element).toBeTruthy()  // 是否存在
    expect(element).toBeInTheDocument() // 是否存在DOM上
    expect(element.disabled).toBeFalsy()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('kip-btn btn-default')
    // 添加事件
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the corrent component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Kip song</Button>)
    const element = wrapper.getByText('Kip song')
    expect(element).toBeTruthy()  // 是否存在
    expect(element).toHaveClass('btn-default btn-lg klass')
  })

  it('should render a link btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link' href="http://wwww.baidu.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeTruthy()  // 是否存在
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('kip-btn btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Kip song</Button>)
    const element = wrapper.getByText('Kip song')
    expect(element).toBeTruthy()  // 是否存在
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})