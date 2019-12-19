import { COLOURS, brandGlow, brandShadow } from '../customTheme'
import { IconFill, IconOutline } from '@ant-design/icons-react-native'
import { TouchableOpacity, View } from 'react-native'

import React from 'react'

const iconStyle = {
  margin: 10,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  ...brandGlow
}
const buttonStyle = {
  height: 50,
  minWidth: 50,
  borderRadius: 25,
  backgroundColor: 'white',
  margin: 10,
  ...brandShadow,
  ...brandGlow
}
const IconButton = ({ icon = 'audio', size = 30, colour = COLOURS.primary, filled, children }) => (
  <TouchableOpacity style={buttonStyle}>
    {filled ? (
      <IconFill name={icon} size={size} color={colour} style={iconStyle} />
    ) : (
      <IconOutline name={icon} size={size} color={colour} style={iconStyle} />
    )}
    {children}
  </TouchableOpacity>
)

export default IconButton
