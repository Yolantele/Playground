import { FlipNumber, Timer } from 'react-native-flip-timer'

import React from 'react'
import { View } from 'react-native'

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%'
  }
}

const FlipTimer = () => {
  return (
    <View style={styles.container}>
      <Timer time={500} play />
      {/* <FlipNumber /> */}
    </View>
  )
}

export default FlipTimer
