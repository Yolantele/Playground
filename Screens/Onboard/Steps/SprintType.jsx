import React from 'react'
import { View } from 'react-native'
import { TheText } from '../../../UI'
import styles from '../Style'
import { Button } from '@ant-design/react-native'
import { secondaryColour } from '../../../customTheme'
import { SPRINT_TYPE } from '../const'

const SprintType = ({ setType }) => (
  <>
    {SPRINT_TYPE.map((op, i) => (
      <View style={{ marginTop: 20, marginBottom: 20 }} key={i}>
        <TheText xl bold color={secondaryColour}>
          {op.text}
        </TheText>

        <Button
          style={{ ...styles.buttonStyle, margin: 10 }}
          onPress={() => setType(op.val)}
          disabled={op.disabled}>
          <TheText bold xl color={secondaryColour} onPress={() => !op.disabled && setType(op.val)}>
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

export default SprintType
