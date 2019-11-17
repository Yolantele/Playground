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
        We're happy to see you here and start the Glo Sprint. Lets set it unique to You!
      </TheText>
    </TheCard>
    <Button style={{ ...styles.buttonStyle, margin: 10 }}>
      <TheText bold color={secondaryColour} onPress={next}>
        Let's Glo! 🤸🏻‍
      </TheText>
    </Button>
    <Button type="ghost" onPress={goHome} style={{ ...styles.buttonStyle, margin: 10 }}>
      Skip Setup
    </Button>
  </View>
)

export default Intro
