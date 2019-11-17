import React from 'react'
import { View } from 'react-native'
import { Button } from '@ant-design/react-native'
import { TheText } from '../../../UI'
import styles from '../OnboardStyle'
import { specialTextColour, secondaryColour } from '../../../customTheme'
import { RULES } from '../const'

const Rules = ({ next }) => (
  <View style={styles.section}>
    {RULES.map((each, i) => (
      <View style={{ margin: 10 }} key={i}>
        <TheText xl bold centered color={specialTextColour}>
          {each.head}
        </TheText>
        <TheText xl bold centered color={'white'}>
          {each.text}
        </TheText>
      </View>
    ))}
    <Button style={styles.buttonStyle} onPress={next}>
      <TheText bold color={secondaryColour} onPress={next}>
        Set Base >
      </TheText>
    </Button>
  </View>
)

export default Rules
