import { Animated } from 'react-native'
import { useState, useEffect } from 'react'

const useAnimation = ({ duration = 1000 }) => {
  const animatedValue = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start()
  }, [])

  return animatedValue
}

export default useAnimation
