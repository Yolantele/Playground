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

const YourWhy = ({ nextSection, goHome }) => {
  const [why, setWhy] = useState({ goal: '', yourWhy: 'some', commonPitfalls: [], solutions: [] })
  const [step, setStep] = useState(0)
  const [value, onChangeText] = useState('')

  const changeSection = () => {
    if (step === steps.length + 1) {
      nextSection()
    } else {
      setStep(step + 1)
    }
  }

  const steps = [
    {
      title: 'A strong enough reason to embark on this journey',
      sub: `'I want to look like that girl on instagram' - may not be the strongest of reasons 😉`,
      content: (
        <>
          <WhiteSpace size="xl" />
          <TheText large centered bold>
            SO....Why do you really want to do this?
          </TheText>
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
    },
    {
      title: 'What can you set in place?',
      sub: `Now that you are aware of your common blockers, lets something in place to combat each blocker! This step will help to customise your Glow journey!`,
      content: (
        <View>
          <TheCard></TheCard>
        </View>
      ),
      buttonText: 'Customise Sprint 💃🏻>'
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
      {step !== steps.length - 1 ? (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            type="ghost"
            onPress={() => nextSection(1)}
            style={{ ...styles.buttonStyle, margin: 10 }}>
            Skip
          </Button>
          <Button onPress={() => changeSection()} style={{ ...styles.buttonStyle, margin: 10 }}>
            <TheText bold large color={secondaryColour} onPress={() => changeSection()}>
              {buttonText}
            </TheText>
          </Button>
        </View>
      ) : (
        <Button onPress={() => nextSection(1)} style={{ ...styles.buttonStyle, margin: 10 }}>
          <TheText bold large color={secondaryColour} onPress={() => nextSection(1)}>
            Customise Sprint 💃🏻>
          </TheText>
        </Button>
      )}
    </View>
  )
}
export default YourWhy
