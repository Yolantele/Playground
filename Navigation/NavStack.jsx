import { IconFill, IconOutline } from '@ant-design/icons-react-native'

import { COLOURS } from '../customTheme'
import { Checkin } from '../Screens/Checkin'
import { Home } from '../Screens/Home'
import { Onboard } from '../Screens/Onboard'
import { Profile } from '../Screens/Profile'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, createAnimatedSwitchNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

const needsOnboarding = false
const initialRouteName = needsOnboarding ? 'Onboard' : 'Home'

const customisedLook = {
  headerMode: 'screen',
  cardStyle: { backgroundColor: COLOURS.background },
  mode: 'card'
}

const HomeStack = createStackNavigator(
  {
    Home,
    Onboard
  },
  {
    ...customisedLook,
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: !needsOnboarding
    },
    initialRouteName
  }
)
const ProfileStack = createStackNavigator(
  {
    Profile
  },
  customisedLook
)

const CheckinStack = createStackNavigator(
  {
    Checkin
  },
  customisedLook
)

const OnboardStack = createStackNavigator(
  {
    Onboard
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
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          console.log('nav state----', navigation.state)

          const { routeName } = navigation.state
          let iconName
          if (routeName === 'Home') iconName = 'home'
          if (routeName === 'Profile') iconName = 'smile'
          if (routeName === 'Checkin') iconName = 'audio'

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
      },
      initialRouteName: 'Home'
    }
  )
)

export default NavStack
