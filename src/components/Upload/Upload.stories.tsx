import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Upload, { UploadProps } from './Upload';
import Icon from './../Icon/Icon'
import Button from '../Button/Button'

export default {
  title: 'Example/Upload',
  component: Upload
} as Meta;

const Template: Story<UploadProps> = (args) => <Upload
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  name="fileName"
  multiple
  drag
>
  <Icon icon="upload" size="5x" theme="secondary" />
  <br />
  <p>Drag file over to upload</p>

</Upload>;

const DefaultTemplate: Story<UploadProps> = (args) => <Upload
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  name="fileName"
  multiple
>
 <Button btnType='primary'>upload file</Button>

</Upload>;

export const Default = DefaultTemplate.bind({});

export const DefaultDrag = Template.bind({});

