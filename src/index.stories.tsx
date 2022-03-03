import { useState, useEffect } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Component } from './Component'
const tailwind = require('../tailwind.config')

export default {
  title: 'Component',
  component: Component,
} as ComponentMeta<typeof Component>

export const Text = () => {
  const [colorsList, setColorsList] = useState([])

  const parseTailwindColors = () => {
    return Object.keys(tailwind.theme.colors).map((color) => {
      if (typeof tailwind.theme.colors[color] === 'string') {
        return {
          name: color,
          value: tailwind.theme.colors[color],
        }
      }

      return {
        name: color,
        colors: Object.keys(tailwind.theme.colors[color]).map((_color) => {
          return {
            name: _color,
            value: tailwind.theme.colors[color][_color],
          }
        }),
      }
    })
  }

  useEffect(() => {
    setColorsList(parseTailwindColors)
  }, [])

  return (
    <div>
      <h1>Colors</h1>

      {colorsList.map((item, idx) => {
        if (item.colors) {
          return (
            <>
              <div>
                {item.name}
              </div>

              {item.colors.map((itm, indx) => (
                <div key={indx}>{itm.name} {itm.value}</div>
              ))}
            </>
          )
        }

        if (item.value) {
          return (
            <div key={idx}>{item.name} {item.value}</div>
          )
        }
      })}
    </div>
  )
}

export const Primary: ComponentStory<typeof Component> = () => <Text />
