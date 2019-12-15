import { Button } from '@ant-design/react-native'
import { COLOURS } from '../../../customTheme'
import React from 'react'
import { SPRINT_TYPE } from '../const'
import { TheText } from '../../../UI'
import { View } from 'react-native'
import styles from '../Style'

const Type = ({ setType }) => (
  <>
    {SPRINT_TYPE.map((op, i) => (
      <View style={{ marginTop: 20, marginBottom: 20 }} key={i}>
        <TheText xl bold color={COLOURS.secondary}>
          {op.text}
        </TheText>

        <Button
          style={{ ...styles.buttonStyle, margin: 10 }}
          onPress={() => setType(op.val)}
          disabled={op.disabled}>
          <TheText
            bold
            xl
            color={COLOURS.secondary}
            onPress={() => !op.disabled && setType(op.val)}>
            {op.button}
          </TheText>
        </Button>
        {op.subText && (
          <TheText large centered>
            {op.subText}
          </TheText>
        )}
      </View>
    ))}
  </>
)

export default Type
