import React from 'react'
import { TheText } from '../UI'
import { Button, WhiteSpace, InputItem } from '@ant-design/react-native'
import { secondaryColour } from '../customTheme'
import { INPUT_MAX } from './const'

const OneLineInput = ({ head = '', action, disabled, onChange, title, placeholder, value }) => (
  <>
    <WhiteSpace size="lg" />
    <TheText centered>{head}</TheText>
    <InputItem
      style={{ margin: 10, marginTop: 20 }}
      maxLength={INPUT_MAX}
      clear
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      extra={
        <Button onPress={action} disabled={disabled}>
          <TheText bold color={secondaryColour} onPress={action}>
            {title}
          </TheText>
        </Button>
      }
    />
    <WhiteSpace size="lg" />
  </>
)

export default OneLineInput
