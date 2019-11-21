import React from 'react'
import { NavStack } from './Navigation'
import { Provider } from '@ant-design/react-native'
import { customTheme } from './customTheme'

const App = () => (
  <Provider theme={customTheme}>
    <NavStack />
  </Provider>
)

export default App
