import React, { useState, useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { textColour, fontSizeBase } from '../customTheme'

const TheText = ({ children, bold, light, large, small, ...rest }) => {
  const { text } = styles
  const [fontSize, setFontSize] = useState(fontSizeBase)

  useEffect(() => {
    if (large) setFontSize(fontSizeBase + 2)
    if (small) setFontSize(fontSizeBase - 2)
  }, [])

  const fontWeight = () => {
    if (bold) return 'bold'
    if (light) return '100'
    return '400'
  }

  return (
    <Text
      style={{ ...text, fontSize, fontWeight: fontWeight() }}
      onLongPress={() => setFontSize(fontSize + 4)}
      {...rest}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'helvetica',
    color: textColour,
    lineHeight: 20,
    textAlign: 'justify',
    letterSpacing: 1
  }
})

export default TheText
