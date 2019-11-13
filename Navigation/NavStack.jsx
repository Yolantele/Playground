import { Home } from '../Screens/Home'
import { Profile } from '../Screens/Profile'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  }
})

const NavStack = createAppContainer(
  createStackNavigator({
    Main: MainNavigator
  })
)

export default NavStack
