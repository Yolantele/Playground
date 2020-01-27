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
        Welcome to Your Own Glo Sprint ! ☺️
      </TheText>
      <TheText bold large centered color={COLOURS.secondary}>
        Before you begin, consider conecting deeeply to the Reason - your WHY - for embarking on the
        Glo Sprint - to keep you motivated for the 7 day Glo Sprint!
      </TheText>
    </TheCard>
    <WhiteSpace size='lg' />
    {[
      { text: 'Set Your WHY! 🤸🏻‍', action: () => next(1) },
      { text: 'Skip to Glo Sprint 🏁', action: () => next(2) }
    ].map(({ text, action, type }, i) => (
      <Button
        type={type && type}
        style={{ ...styles.buttonStyle, margin: 10 }}
        onPress={action}
        key={`buttons-${i}`}>
        <TheText bold xl color={COLOURS.secondary} onPress={action}>
          {text}
        </TheText>
      </Button>
    ))}
  </View>
)

export default Intro
