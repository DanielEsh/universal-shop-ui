import '../src/main.css'

import { themes } from '@storybook/theming'

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
    // classes
    darkClass: 'dark',
    lightClass: 'light',
    // class target
    classTarget: 'html',
    // Set the initial theme
    current: 'light',
    stylePreview: true,
  },
}