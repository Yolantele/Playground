import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { TheText, TheCard } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace, TextareaItem } from '@ant-design/react-native'
import {
  secondaryColour,
  bodyColour,
  backgroundColor,
  radiusBase,
  fontSizeBase,
  lightColour
} from '../../../customTheme'

const GoalForm = ({ label, val, onChange, foot, placeHold }) => (
  <>
    <WhiteSpace size="xl" />
    <TheText large centered bold>
      {label}
    </TheText>
    <WhiteSpace size="lg" />
    <TextareaItem
      style={{ margin: 10, borderRadius: radiusBase }}
      maxLength={100}
      clear
      value={val}
      onChange={onChange}
      placeholder={placeHold}
      rows={6}
      // error={true}
      // onErrorClick={() => alert(';hey')}
    />
    <TheText large color={lightColour}>
      {foot}
    </TheText>
    <WhiteSpace size="lg" />
  </>
)
const YourWhy = ({ nextSection, goHome }) => {
  const [why, setWhy] = useState({ goal: '', yourWhy: 'some', commonPitfalls: [], solutions: [] })
  const [subStep, setSubStep] = useState(0)

  const changeSection = () => {
    if (subStep === steps.length + 1) {
      nextSection()
    } else {
      setSubStep(subStep + 1)
    }
  }

  const steps = [
    {
      title: 'A strong enough reason to embark on this journey',
      sub: `'I want to look like that girl on instagram' - may not be the strongest of reasons 😉`,
      content: (
        <GoalForm
          label={'Why do you want to embark on this Journey?'}
          val={why.yourWhy}
          onChange={val => setWhy({ ...why, yourWhy: val })}
          foot={'We will use your Why note as the Reminder during the Glo Sprint'}
          placeHold={'Note your reason here...'}
        />
      ),
      buttonText: 'Go to My Goal >'
    },
    {
      title: 'what do you want to achieve over the duration of the sprint?',
      sub: ``,
      content: (
        <GoalForm
          label={'What is your goal for the next {sprint days} days?'}
          val={why.goal}
          onChange={val => setWhy({ ...why, goal: val })}
          foot={'We will use your Goal note as the Reminder during the Glo Sprint'}
          placeHold={'Note your goal here...'}
        />
      ),
      buttonText: 'Map Pitfalls 😖>'
    },
    {
      title: 'What are your common Pitfalls?',
      sub: `Binge eating? Giving up before it took off? Running out of time for yourself? Think hard to capture what are your common sabotagers...`,
      content: (
        <GoalForm
          label={'What are your common Pitfalls ?'}
          val={why.commonPitfalls}
          onChange={val => setWhy({ ...why, commonPitfalls: val })}
          foot={'Did you note them all? The more the better'}
          placeHold={'Note your common Pitfalls here...'}
        />
      ),
      buttonText: 'Brainstorm Solutions 💃🏻>'
    },
    {
      title: 'What can you set in place?',
      sub: `Now that you are aware of your common pitfalls, lets brainstorm some ideas to combat each blocker! `,
      content: (
        <>
          <TheCard>
            <TheText large centered bold color={secondaryColour}>
              My common Pitfalls that Sabotage My Effort:{' '}
            </TheText>
            <TheText large>{why.commonPitfalls}</TheText>
          </TheCard>
          <GoalForm
            label={
              'Brainstorm What could be the solutions or counter-acts to the Pitfalls listed above'
            }
            val={why.solutions}
            onChange={val => setWhy({ ...why, solutions: val })}
            foot={'This step should help you customise your Glow journey next!'}
            placeHold={'Note your solutions here...'}
          />
        </>
      ),
      buttonText: 'Customise Sprint 💃🏻>'
    }
  ]

  const { title, sub, content, buttonText } = steps[subStep]
  const isDisabled = false
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
      {subStep !== steps.length - 1 ? (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            type="ghost"
            onPress={() => nextSection()}
            style={{ ...styles.buttonStyle, margin: 10 }}>
            Skip
          </Button>
          <Button
            disabled={isDisabled}
            onPress={() => changeSection()}
            style={{ ...styles.buttonStyle, margin: 10 }}>
            <TheText bold large color={secondaryColour} onPress={() => changeSection()}>
              {buttonText}
            </TheText>
          </Button>
        </View>
      ) : (
        <Button onPress={() => nextSection} style={{ ...styles.buttonStyle, margin: 10 }}>
          <TheText bold large color={secondaryColour} onPress={() => nextSection()}>
            Customise Sprint 💃🏻>
          </TheText>
        </Button>
      )}
      <WhiteSpace size="xl" />
    </View>
  )
}
export default YourWhy
