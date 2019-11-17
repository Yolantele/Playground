import { Card } from '@ant-design/react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { brandShadow } from '../customTheme'

const { Body } = Card

const cardStyle = {
  ...brandShadow,
  padding: 30,
  paddingTop: 20,
  minHeight: 150,
  margin: 5
}

const TheCard = ({ height, children }) => (
  <TouchableOpacity style={{ width: '100%', height }}>
    <Card style={cardStyle}>
      <Body>{children}</Body>
    </Card>
  </TouchableOpacity>
)

export default TheCard
