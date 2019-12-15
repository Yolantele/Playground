import { COLOURS, radiusBase } from '../customTheme'
import { TextareaItem, WhiteSpace } from '@ant-design/react-native'

import React from 'react'
import { TheText } from './TheText'

const GoalForm = ({ val = '', onChange, foot = '', placeHold = '', label = '' }) => (
  <>
    <TheText>{label}</TheText>
    <TextareaItem
      style={{ margin: 10, borderRadius: radiusBase }}
      maxLength={100}
      clear
      value={val}
      onChange={onChange}
      placeholder={placeHold}
      rows={6}
    />
    <TheText large color={COLOURS.light}>
      {foot}
    </TheText>
    <WhiteSpace size="lg" />
  </>
)

export default GoalForm
