import { COLOURS, fontSizeBase, lineHeight } from '../customTheme'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

const MAX_FONT_SIZE = 20

const TheText = ({
  children,
  bold,
  light,
  large,
  small,
  xl,
  xxl,
  xxxl,
  color,
  centered,
  style,
  ...rest
}) => {
  const { text } = styles
  const [fontSize, setFontSize] = useState(fontSizeBase)

  useEffect(() => {
    if (large) setFontSize(fontSizeBase + 2)
    if (small) setFontSize(fontSizeBase - 2)
    if (xl) setFontSize(fontSizeBase * 1.5)
    if (xxl) setFontSize(fontSizeBase * 2)
    if (xxxl) setFontSize(fontSizeBase * 3.5)
  }, [])

  const fontWeight = () => {
    if (bold) return 'bold'
    if (light) return '100'
    return '400'
  }

  return (
    <Text
      style={{
        ...text,
        fontSize,
        fontWeight: fontWeight(),
        lineHeight: fontSize * 1.5,
        color,
        textAlign: centered ? 'center' : 'justify',
        ...style
      }}
      onLongPress={() => fontSize < MAX_FONT_SIZE && setFontSize(fontSize + 4)}
      {...rest}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir-light',
    color: COLOURS.text,
    letterSpacing: 0.9
  }
})

export default TheText
