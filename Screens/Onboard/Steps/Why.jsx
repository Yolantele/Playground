import { Button, TextareaItem, WhiteSpace } from '@ant-design/react-native'
import { COLOURS, radiusBase } from '../../../customTheme'
import { GoalForm, TheCard, TheText } from '../../../UI'
import React, { useState } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View } from 'react-native'
import styles from '../Style'

const { light, secondary } = COLOURS

const Why = ({ nextSection }) => {
  const [why, setWhy] = useState({ goal: '', myWhy: '', pitfalls: '', solutions: '' })
  const [subStep, setSubStep] = useState(0)

  const changeSection = () => {
    if (subStep === steps.length + 1) nextSection()
    else setSubStep(subStep + 1)
  }

  const steps = [
    {
      title: 'Your Reason to embark on the Glo Sprint',
      sub: 'Try a few and pick the most inspiring one that makes you feel really excited!',
      content: (
        <GoalForm
          label='Why do you want to do it?'
          val={why.myWhy}
          onChange={myWhy => setWhy({ ...why, myWhy })}
          foot='We will remind you of your WHY soon 😉'
          placeHold='my reason...'
        />
      ),
      buttonText: 'Go to My Goal >'
    },
    {
      title: 'What do you want to achieve over the long haul? ',
      sub: "What is the Big and Measurable Goal? Ex: 'I want to be so radiant, people notice it'",
      content: (
        <GoalForm
          label='What is your Measurable Goal?'
          val={why.goal}
          onChange={goal => setWhy({ ...why, goal })}
          foot='We will remind you of the Goal soon 👍'
          placeHold='my goal...'
        />
      ),
      buttonText: 'Map Pitfalls 😖>'
    },
    {
      title: 'What are your common Pitfalls?',
      sub:
        'Emotional eating? Running out of time? - Think what all the common saboteurs are for you...',
      content: (
        <GoalForm
          label='What are your common Pitfalls ?'
          val={why.pitfalls}
          onChange={pitfalls => setWhy({ ...why, pitfalls })}
          foot='Make sure to catch them all'
          placeHold='my common pitfalls...'
        />
      ),
      buttonText: 'Brainstorm Solutions 🤓>'
    },
    {
      title: 'What can you set in place?',
      sub:
        'Now that you are aware of your common pitfalls, lets brainstorm some ideas to combat each blocker! ',
      content: (
        <>
          {why.pitfalls && why.pitfalls.length ? (
            <TheCard>
              <TheText bold large centered>
                My Common Pitfalls are:
              </TheText>
              <WhiteSpace size='lg' />
              <TheText large>{why.pitfalls}</TheText>
            </TheCard>
          ) : null}
          <WhiteSpace size='lg' />
          <GoalForm
            label={'What counter-acts your Pitfalls ?'}
            val={why.solutions}
            onChange={solutions => setWhy({ ...why, solutions })}
            foot='This should inform your setup coming next!'
            placeHold='my solutions...'
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
        <TheCard>
          <TheText bold xl centered color={secondary}>
            {title}
          </TheText>
          <WhiteSpace size='lg' />
          <TheText bold centered large color={secondary}>
            {sub}
          </TheText>
        </TheCard>
        {content}
        {subStep !== steps.length - 1 ? (
          <View style={styles.subStep}>
            <Button type='ghost' onPress={() => nextSection()} style={styles.buttonStyle}>
              Skip
            </Button>
            <Button
              disabled={isDisabled}
              onPress={() => changeSection()}
              style={styles.buttonStyle}
              type='primary'>
              <TheText bold large color={light} onPress={() => changeSection()}>
                {buttonText}
              </TheText>
            </Button>
          </View>
        ) : (
          <Button onPress={() => nextSection()} style={styles.buttonStyle} type='primary'>
            <TheText bold large onPress={() => nextSection()}>
              Customise Sprint 💃🏻>
            </TheText>
          </Button>
        )}
        <WhiteSpace size='xl' />
      </View>
    </KeyboardAwareScrollView>
  )
}
export default Why
