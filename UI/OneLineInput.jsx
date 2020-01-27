import { Button, InputItem, WhiteSpace } from '@ant-design/react-native'

import { COLOURS } from '../customTheme'
import { INPUT_MAX } from './const'
import React from 'react'
import { TheText } from '../UI'

const OneLineInput = ({ head = '', action, disabled, onChange, title, placeholder, value }) => (
  <>
    <WhiteSpace size='lg' />
    <TheText large centered>
      {head}
    </TheText>
    <InputItem
      {...{ value, onChange, placeholder }}
      style={{ margin: 10, marginTop: 20 }}
      maxLength={INPUT_MAX}
      clear
      extra={
        <Button onPress={action} disabled={disabled} style={{ margin: 5 }}>
          <TheText bold color={COLOURS.secondary} onPress={action}>
            {title}
          </TheText>
        </Button>
      }
    />
    <WhiteSpace size='lg' />
  </>
)

export default OneLineInput
