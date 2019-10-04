

import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, ScrollView, Text, Button} from 'react-native'


const Home = ({navigation}) => {
 
    const [counter, setCounter] = useState(0)
    const { container } = styles
    const {navigate} = navigation;

    return (
      <ScrollView contentContainerStyle={container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Text>Home</Text>
        
        <Button
          title="Go to profile"
          accessibilityLabel="Go to profile Button"
          onPress={() => {
            setCounter(counter + 1)
            navigate('Profile', {name: 'Jane'})}
          }
        />
        <Text>{counter}</Text>
        <StatusBar/>
        
      </ScrollView>
    )
  
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