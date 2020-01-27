import { Card } from '@ant-design/react-native'
import React from 'react'
import { brandShadow } from '../customTheme'

const { Body, Header } = Card

const cardStyle = {
  ...brandShadow,
  padding: 20,
  paddingTop: 5,
  minHeight: 150,
  marginVertical: 10,
  opacity: 0.9
}

const TheCard = ({ height, children, title, color }) => (
  <Card style={{ ...cardStyle, color, width: '100%', height }}>
    <Header title={title} />
    <Body>{children}</Body>
  </Card>
)

export default TheCard
