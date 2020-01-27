import { Button } from '@ant-design/react-native'
import { COLOURS } from '../../../customTheme'
import React from 'react'
import { TheText } from '../../../UI'
import { View } from 'react-native'
import styles from '../Style'

const RULES = [
  {
    head: '1 - CORE 🏠',
    text: '1 Key Activity or a way of Being central to your Glo Sprint',
    ex:
      'for example "natural sugars only", "no smoking", "mindul and present throughout day" or similar '
  },
  {
    head: '2 - DAILIES 📅',
    text: '3 tasks to complete each day',
    ex: 'for example "meditate 15 min", "drink 2L of water" ect. '
  },
  {
    head: '3 - BONUS 🔥',
    text: '1 bonus activity during the sprint to boost the Glo points',
    ex: 'for example "spa day", "cleansing/fasting day" ect.'
  }
]

const { secondary, specialText } = COLOURS

const Rules = ({ next }) => (
  <View style={styles.section}>
    {RULES.map((each, i) => (
      <View style={{ margin: 10 }} key={`rules-${i}`}>
        <TheText xl bold centered color={specialText}>
          {each.head}
        </TheText>
        <TheText xl bold centered color='white'>
          {each.text}
        </TheText>
        <TheText centered color='white'>
          {each.ex}
        </TheText>
      </View>
    ))}
    <Button style={styles.buttonStyle} onPress={next}>
      <TheText large bold color={secondary} onPress={next}>
        Set Your Core >
      </TheText>
    </Button>
  </View>
)

export default Rules
