import { IconFill, IconOutline } from '@ant-design/icons-react-native'

import { COLOURS } from '../customTheme'
import { Checkin } from '../Screens/Checkin'
import { Home } from '../Screens/Home'
import { Onboard } from '../Screens/Onboard'
import { Profile } from '../Screens/Profile'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

const customisedLook = {
  headerMode: 'screen',
  cardStyle: { backgroundColor: COLOURS.background },
  mode: 'card'
}
const HomeStack = createStackNavigator(
  {
    Onboard,
    Home,
    Checkin
  },
  customisedLook
)

const ProfileStack = createStackNavigator(
  {
    Profile
    // Details: DetailsScreen,
    // Other: OtheerScreen,
  },
  customisedLook
)
const CheckinStack = createStackNavigator(
  {
    Checkin
    // Details: DetailsScreen,
    // Other: OtheerScreen,
  },
  customisedLook
)

const NavStack = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Profile: ProfileStack,
      Checkin: CheckinStack
    },
    //other config for tab navigator
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          if (routeName === 'Home') iconName = `home`
          if (routeName === 'Profile') iconName = `smile`
          if (routeName === 'Checkin') iconName = `audio`

          return (
            <>
              {focused ? (
                <IconFill name={iconName} size={30} color={tintColor} />
              ) : (
                <IconFill name={iconName} size={25} color={tintColor} />
              )}
            </>
          )
        }
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }
    }
  )
)

export default NavStack
