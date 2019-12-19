import React from 'react'
import { Timer } from 'react-native-flip-timer'
import { View } from 'react-native'

const styles = {
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10%',
    color: 'hotpink'
  },
  button: {
    height: 40,
    backgroundColor: '#333333',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cccccc'
  }
}

const FlipTimer = () => {
  return (
    <View style={styles.container}>
      <Timer time={500} play={true} />
    </View>
  )
}

export default FlipTimer
