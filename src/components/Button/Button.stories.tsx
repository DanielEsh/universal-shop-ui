import { Meta } from '@storybook/react'

import { Button } from './index'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

export { default as Default } from './examples/Default'
export { default as SizesColors } from './examples/Sizes&Colors'
export { default as CustomClassNames } from './examples/CustomClassNames'
export { default as Outline } from './examples/Outline'
export { default as Global } from './examples/Global'
