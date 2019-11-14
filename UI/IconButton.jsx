import { IconFill } from '@ant-design/icons-react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { primaryColour, brandShadow, brandGlow } from '../customTheme'

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
  width: 50,
  borderRadius: 25,
  backgroundColor: 'white',
  margin: 20,
  ...brandShadow,
  ...brandGlow
}
const IconButton = ({ icon = 'audio', size = 30, colour = primaryColour }) => (
  <TouchableOpacity style={buttonStyle}>
    <IconFill name={icon} size={size} color={colour} style={iconStyle} />
  </TouchableOpacity>
)

export default IconButton
