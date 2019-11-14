import { Home } from '../Screens/Home'
import { Profile } from '../Screens/Profile'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const HomeStack = createStackNavigator({
  Home
  // Details: DetailsScreen,
})

const ProfileStack = createStackNavigator({
  Profile
  // Details: DetailsScreen,
  // Other: OtheerScreen,
})

const NavStack = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Profile: ProfileStack
    }
    //other config for tab navigator
    // {
    //   defaultNavigationOptions: ({ navigation }) => ({
    //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //       const { routeName } = navigation.state;
    //       let IconComponent = Ionicons;
    //       let iconName;
    //       if (routeName === 'Home') {
    //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //         // Sometimes we want to add badges to some icons.
    //         // You can check the implementation below.
    //         IconComponent = HomeIconWithBadge;
    //       } else if (routeName === 'Settings') {
    //         iconName = `ios-options`;
    //       }

    //       // You can return any component that you like here!
    //       return <IconComponent name={iconName} size={25} color={tintColor} />;
    //     },
    //   }),
    //   tabBarOptions: {
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    //   },
    // }
  )
)

export default NavStack
