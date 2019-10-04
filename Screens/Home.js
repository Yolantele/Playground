

import React from 'react'
import { Platform, StatusBar, StyleSheet, ScrollView, Text, Button} from 'react-native'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { container } = styles
    const {navigate} = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={container}>
      
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Text>Home</Text>
        <Button
          title="Go to profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
        <StatusBar/>
        
      </ScrollView>
    )
  
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

export default Home