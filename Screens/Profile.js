

import React from 'react'
import { Platform, StatusBar, StyleSheet, ScrollView, Text} from 'react-native'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { container } = styles
    return (
        <ScrollView contentContainerStyle={container}>
      
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
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