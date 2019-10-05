import React from 'react'
import { ScrollView } from 'react-native'
import { TheText } from '../../UI'
import styles from './ProfileStyle'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  }
  render() {
    const { container } = styles

    return (
      <ScrollView contentContainerStyle={container}>
        <TheText bold>Profile</TheText>
      </ScrollView>
    )
  }
}

export default Profile
