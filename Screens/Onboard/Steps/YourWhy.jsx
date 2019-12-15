import React, { useState } from 'react'
import { View } from 'react-native'
import { TheText, TheCard } from '../../../UI'
import styles from '../Style'
import { Button, WhiteSpace, TextareaItem } from '@ant-design/react-native'
import { secondaryColour, radiusBase, lightColour, specialTextColour } from '../../../customTheme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const GoalForm = ({ val, onChange, foot, placeHold }) => (
  <>
    <TextareaItem
      style={{ margin: 10, borderRadius: radiusBase }}
      maxLength={100}
      clear
      value={val}
      onChange={onChange}
      placeholder={placeHold}
      rows={6}
    />
    <TheText large color={lightColour}>
      {foot}
    </TheText>
    <WhiteSpace size="lg" />
  </>
)
const YourWhy = ({ nextSection, goHome }) => {
  const [why, setWhy] = useState({ goal: '', yourWhy: '', commonPitfalls: '', solutions: '' })
  const [subStep, setSubStep] = useState(0)

  console.log('why is===', why)

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
        <>
          <TextareaItem
            style={{ margin: 10, borderRadius: radiusBase }}
            maxLength={100}
            clear
            value={why.yourWhy}
            onChange={value => {
              console.log('value is ==', value)
              setWhy({ ...why, yourWhy: value })
            }}
            placeholder={'Note your reason here...'}
            rows={6}
          />
          <TheText large color={lightColour}>
            We will use your Why note as the Reminder during the Glo Sprint
          </TheText>
          <WhiteSpace size="lg" />
        </>
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
          {why.commonPitfalls && why.commonPitfalls.length ? (
            <TheCard>
              <TheText bold large>
                My Common Pitfalls are:
              </TheText>
              <TheText large>{why.commonPitfalls}</TheText>
            </TheCard>
          ) : null}
          <WhiteSpace size="lg" />
          <TheText xl centered bold color={specialTextColour}>
            What could be the solutions to counter-act the Pitfalls{' '}
            {why.commonPitfalls && why.commonPitfalls.length ? 'listed above:' : '?'}
          </TheText>
          <GoalForm
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
    <KeyboardAwareScrollView>
      <View style={{ ...styles.section, flex: 1, width: '100%' }}>
        <TheCard style={{ paddingBottom: '5%' }}>
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
    </KeyboardAwareScrollView>
  )
}
export default YourWhy
