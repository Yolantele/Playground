import { Card } from '@ant-design/react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { brandShadow } from '../customTheme'

const { Body, Header } = Card

const cardStyle = {
  ...brandShadow,
  padding: 30,
  paddingTop: 5,
  minHeight: 150,
  marginVertical: 5
}

const TheCard = ({ height, children, title }) => (
  <TouchableOpacity style={{ width: '100%', height }}>
    <Card style={cardStyle}>
      <Header title={title} />
      <Body>{children}</Body>
    </Card>
  </TouchableOpacity>
)

export default TheCard
