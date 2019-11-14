import { Card } from '@ant-design/react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { brandShadow } from '../customTheme'

const { Body } = Card

const cardStyle = { padding: 30, ...brandShadow }

const TheCard = ({ children }) => (
  <TouchableOpacity>
    <Card style={cardStyle}>
      <Body>{children}</Body>
    </Card>
  </TouchableOpacity>
)

export default TheCard
