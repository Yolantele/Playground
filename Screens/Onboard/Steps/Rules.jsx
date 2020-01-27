import { Button } from '@ant-design/react-native'
import { COLOURS } from '../../../customTheme'
import React from 'react'
import { TheText } from '../../../UI'
import { View } from 'react-native'
import styles from '../Style'

const RULES = [
  {
    head: '1 - CORE 🏠',
    text: 'Choose Key Intention for your Glo Sprint',
    ex: 'Examples: "natural sugars only", "no smoking", "mindful and present throughout day"'
  },
  {
    head: '2 - DAILIES 📅',
    text: 'Choose 3 Tasks to complete each day',
    ex: 'Examples: "meditate 15 min", "drink 2L of water" '
  },
  {
    head: '3 - BONUS 🔥',
    text: 'Choose 1 Bonus Activity to complete over the Glo Sprint',
    ex: 'Examples: "spa day", "cleansing/fasting day"'
  }
]

const { secondary, specialText } = COLOURS

const Rules = ({ next }) => (
  <View style={styles.section}>
    {RULES.map((each, i) => (
      <View style={{ margin: 10 }} key={`rules-${i}`}>
        <TheText xl bold centered color='white'>
          {each.head}
        </TheText>
        <TheText large bold centered color={specialText}>
          {each.text}
        </TheText>
        <TheText centered>{each.ex}</TheText>
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
