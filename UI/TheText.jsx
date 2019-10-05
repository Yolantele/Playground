import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'

const DEFAULT = 15
const TheText = ({children, bold, light, ...rest}) => {
  const { text } = styles
  const [fontSize, setFontSize] = useState(DEFAULT)

  const fontWeight = () => {
    if (bold)  return 'bold' 
    if (light) return '100'
    return '400'
  }
  
  return( 
    <Text 
      style={{...text, fontSize, fontWeight: fontWeight() }} 
      onLongPress={() => fontSize === DEFAULT ? setFontSize(18) : setFontSize(DEFAULT)}
      {...rest}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'helvetica',
    color: 'darkslategrey',
    lineHeight: 20,
    textAlign: 'justify',
    letterSpacing: 1
  },
})
  
export default TheText