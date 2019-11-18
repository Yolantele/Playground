import React from 'react'
import { View } from 'react-native'
import { TheText, TheCard } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { secondaryColour } from '../../../customTheme'

const Intro = ({ next, goHome }) => (
  <View style={styles.section}>
    <TheCard>
      <TheText bold xl centered color={secondaryColour}>
        We're happy to see you start Your Own Glo Sprint ! ☺️
      </TheText>
      <TheText bold large centered color={secondaryColour}>
        To make sure you are as motivate as can be, go on and discover or get even more connectected
        to Why are you doing this. Or go ahead to set up of a sprint unique to You 👏
      </TheText>
    </TheCard>
    {[
      { text: `Let's Discover My Why! 🤸🏻‍`, action: () => next(1) },
      { text: `Go Straight to Setup 😊`, action: () => next(2) },
      { text: `Skip Setup`, action: goHome, type: 'ghost' }
    ].map(({ text, action, type }, i) => (
      <Button
        type={type && type}
        style={{ ...styles.buttonStyle, margin: 10 }}
        onPress={action}
        key={i}>
        <TheText bold xl color={secondaryColour} onPress={action}>
          {text}
        </TheText>
      </Button>
    ))}
  </View>
)

export default Intro
