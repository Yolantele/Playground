

import React from 'react'
import { StyleSheet, ScrollView, Text} from 'react-native'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    
  }
  render() {
    const { container } = styles
    console.log('debugging===')
    return (
        <ScrollView contentContainerStyle={container}>
          <Text>Profile</Text>
        </ScrollView>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default Profile