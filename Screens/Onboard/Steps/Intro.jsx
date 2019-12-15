import { Button, WhiteSpace } from '@ant-design/react-native'
import { TheCard, TheText } from '../../../UI'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { View } from 'react-native'
import styles from '../Style'

const Intro = ({ next, goHome }) => (
  <View style={styles.section}>
    <TheCard>
      <TheText bold xl centered color={COLOURS.secondary}>
        We're happy to see you start Your Own Glo Sprint ! ☺️
      </TheText>
      <TheText bold large centered color={COLOURS.secondary}>
        To make sure you are as motivate as can be, go on and discover or get even more connectected
        to Why are you doing this. Or go through just the essential steps! 👏
      </TheText>
    </TheCard>
    {[
      { text: `Let's Go ! 🤸🏻‍`, action: () => next(1) },
      { text: `Skip Setup`, action: goHome, type: 'ghost' }
    ].map(({ text, action, type }, i) => (
      <Button
        type={type && type}
        style={{ ...styles.buttonStyle, margin: 10 }}
        onPress={action}
        key={i}>
        <TheText bold xl color={COLOURS.secondary} onPress={action}>
          {text}
        </TheText>
      </Button>
    ))}
  </View>
)

export default Intro
