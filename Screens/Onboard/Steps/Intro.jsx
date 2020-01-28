import { Button, WhiteSpace } from '@ant-design/react-native'
import { TheCard, TheText } from '../../../UI'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText, white } = COLOURS
const Intro = ({ next, goHome }) => (
  <View style={styles.section}>
    <TheCard>
      <TheText bold xl centered color={secondary}>
        Welcome to Your Glo Sprint!
      </TheText>
      <TheText large centered color={secondary}>
        Before you begin, consider discovering and conecting to the Reason
      </TheText>
      <TheText bold large centered color={specialText}>
        - your WHY -
      </TheText>
      <TheText large centered color={secondary}>
        for embarking on this journey - to keep you motivated for the next 7 days of Glo Sprint!
      </TheText>
    </TheCard>
    <WhiteSpace size='lg' />
    {[
      { text: 'Connect to your WHY! 🤸🏻‍', action: () => next(1), type: 'primary' },
      { text: 'Skip to Glo Sprint 🏁', action: () => next(2), type: 'ghost' }
    ].map(({ text, action, type }, i) => (
      <Button
        type={type && type}
        style={{ ...styles.buttonStyle, margin: 10 }}
        onPress={action}
        key={`buttons-${i}`}>
        <TheText bold large color={type === 'primary' && white} onPress={action}>
          {text}
        </TheText>
      </Button>
    ))}
  </View>
)

export default Intro
