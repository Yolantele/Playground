import Home from './Screens/Home/Home'
import Profile from './Screens/Profile'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile }
})

const NavStack = createStackNavigator({
  Main: MainNavigator
})

const App = createAppContainer(NavStack)

export default App
