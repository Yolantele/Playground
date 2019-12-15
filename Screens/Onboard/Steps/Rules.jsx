import { Button } from '@ant-design/react-native'
import { COLOURS } from '../../../customTheme'
import { RULES } from '../const'
import React from 'react'
import { TheText } from '../../../UI'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText } = COLOURS

const Rules = ({ next }) => (
  <View style={styles.section}>
    {RULES.map((each, i) => (
      <View style={{ margin: 10 }} key={i}>
        <TheText xl bold centered color={specialText}>
          {each.head}
        </TheText>
        <TheText xl bold centered color={'white'}>
          {each.text}
        </TheText>
      </View>
    ))}
    <Button style={styles.buttonStyle} onPress={next}>
      <TheText large bold color={secondary} onPress={next}>
        Set Base >
      </TheText>
    </Button>
  </View>
)

export default Rules
