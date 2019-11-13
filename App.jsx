import customTheme from './customTheme'
import React from 'react'
import { Provider } from '@ant-design/react-native'
import { NavStack } from './Navigation'

const App = () => (
  <Provider theme={customTheme}>
    <NavStack />
  </Provider>
)

export default App
