import { COLOURS, radiusBase } from '../customTheme'
import { TextareaItem, WhiteSpace } from '@ant-design/react-native'

import React from 'react'
import TheText from './TheText'

const { specialText } = COLOURS
const GoalForm = ({ val = '', onChange, foot = '', placeHold = '', label = '' }) => (
  <>
    <WhiteSpace size='lg' />
    <TheText centered bold xl color={specialText}>
      {label}
    </TheText>
    <WhiteSpace size='lg' />
    <TextareaItem
      style={{ borderRadius: radiusBase }}
      maxLength={100}
      clear
      value={val}
      onChange={onChange}
      placeholder={placeHold}
      rows={6}
    />
    <TheText large bold centered color={COLOURS.light}>
      {foot}
    </TheText>
    <WhiteSpace size='lg' />
  </>
)

export default GoalForm
