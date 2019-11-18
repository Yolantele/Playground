import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { TheText, TheCard } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace } from '@ant-design/react-native'
import {
  secondaryColour,
  bodyColour,
  backgroundColor,
  radiusBase,
  fontSizeBase
} from '../../../customTheme'

const YourWhy = ({ next, goHome }) => {
  const [why, setWhy] = useState({ goal: '', yourWhy: 'some', commonPitfalls: [], solutions: [] })
  const [step, setStep] = useState(0)
  const [value, onChangeText] = useState('')
  const steps = [
    {
      title: 'A strong enough reason to embark on this journey',
      sub: `'I want to look like that girl on instagram' - may not be the strongest reason 😉`,
      content: (
        <>
          <TheText centered>SO....Why do you want to do this?</TheText>
          <WhiteSpace />
          <View
            style={{
              backgroundColor: 'white',
              opacity: 0.8,
              borderRadius: radiusBase,
              padding: 10,
              margin: 10
            }}></View>
        </>
      ),
      buttonText: 'Go to My Goal >'
    },
    {
      title: 'what do you want to achieve over the duration of the sprint?',
      sub: ``,
      content: (
        <View>
          <TheCard></TheCard>
        </View>
      ),
      buttonText: 'Catch pitfalls 😖>'
    }
  ]

  const { title, sub, content, buttonText } = steps[step]
  return (
    <View style={{ ...styles.section, flex: 1, width: '100%' }}>
      <TheCard>
        <TheText bold xl centered color={secondaryColour}>
          {title}
        </TheText>
        <WhiteSpace size="lg" />
        <TheText bold large color={secondaryColour}>
          {sub}
        </TheText>
      </TheCard>
      {content}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          type="ghost"
          onPress={() => setStep(step + 1)}
          style={{ ...styles.buttonStyle, margin: 10 }}>
          Skip to Setup
        </Button>
        <Button onPress={() => setStep(step + 1)} style={{ ...styles.buttonStyle, margin: 10 }}>
          <TheText bold large color={secondaryColour} onPress={() => setStep(step + 1)}>
            {buttonText}
          </TheText>
        </Button>
      </View>
    </View>
  )
}
export default YourWhy
