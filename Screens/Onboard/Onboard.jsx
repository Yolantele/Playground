import { Animated, ImageBackground, ScrollView, View } from 'react-native'
import { Core, Bonuses, Dailies, Intro, Rules, Why, Overview } from './Steps'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { COLOURS, brandGlow, brandShadow } from '../../customTheme'
import { MAX_BASE, MAX_BONUS, MAX_DAILIES } from './const'
import React, { useEffect, useState } from 'react'

import { IconFill } from '@ant-design/icons-react-native'
import { ONBOARD } from '../../Assets/Images'
import { TheText } from '../../UI'
import styles from './Style'

const { light } = COLOURS
const { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8 } = ONBOARD

const Onboard = ({ navigation }) => {
  const animatedValue = new Animated.Value(0)

  const [step, setStep] = useState(0)
  const [value, setValue] = useState('')
  const [journey, setJourney] = useState({
    length: 7,
    base: [],
    dailies: [],
    bonus: []
  })

  const { container, backImage, view } = styles
  const { navigate } = navigation

  const onAnimate = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 700
    }).start()
  }

  useEffect(() => {
    onAnimate()
  }, [step])

  const onNextStep = () => {
    animatedValue.setValue(0)
    setStep(step + 1)
    onAnimate()
  }

  const onPreviousStep = () => {
    animatedValue.setValue(0)
    setStep(step - 1)
    onAnimate()
  }

  const setBaseItems = value => {
    setJourney({ ...journey, base: [...journey.base, value] })
    setValue('')
    if (journey.base.length === MAX_BASE) onNextStep()
  }

  const setDailies = dalie => {
    setJourney({ ...journey, dailies: [...journey.dailies, dalie] })
    setValue('')
    if (journey.dailies.length === MAX_DAILIES) onNextStep()
  }

  const setBonusItems = bon => {
    setJourney({ ...journey, bonus: [...journey.bonus, bon] })
    setValue('')
    if (journey.bonus.length === MAX_BONUS) onNextStep()
  }

  const reSetBase = newSet => {
    setJourney({ ...journey, base: newSet })
  }

  const reSetBonus = newSet => {
    setJourney({ ...journey, bonus: newSet })
  }

  const reSetDalies = newSet => {
    setJourney({ ...journey, dailies: newSet })
  }

  const steps = [
    {
      header: 'Welcome to Glo!',
      content: <Intro next={page => setStep(step + page)} goHome={() => navigate('Home')} />,
      icon: 'fire',
      image: IMG1
    },
    {
      header: 'What is your WHY ?',
      content: <Why nextSection={() => setStep(step + 1)} />,
      icon: 'edit',
      image: IMG3
    },
    {
      header: 'Customise Your 7 Day Glo Sprint',
      score: '& get Glos',
      content: <Rules next={onNextStep} />,
      icon: 'experiment',
      image: IMG2
    },
    {
      header: 'CORE',
      score: '5 Glos a Day',
      content: (
        <Core
          {...{ setBaseItems, setValue, value }}
          resetBaseItems={newSet => reSetBase(newSet)}
          base={journey.base}
          next={onNextStep}
        />
      ),
      icon: 'home',
      image: IMG4
    },
    {
      header: 'DAILIES',
      score: `Max ${2 * MAX_DAILIES} Glos a Day`,
      content: (
        <Dailies
          {...{ setDailies, setValue, value }}
          resetDailies={newSet => reSetDalies(newSet)}
          dailies={journey.dailies}
          next={onNextStep}
        />
      ),
      icon: 'rest',
      image: IMG5
    },
    {
      header: 'BONUS',
      score: '5 Glos a Week',
      icon: 'trophy',
      image: IMG6,
      content: (
        <Bonuses
          next={onNextStep}
          resetBonus={newSet => reSetBonus(newSet)}
          setBonus={setBonusItems}
          bonuses={journey.bonus}
          {...{ setValue, value }}
        />
      )
    },
    {
      header: 'Your 7 day Glo Sprint',
      icon: 'eye',
      image: IMG7,
      content: <Overview {...{ journey, navigate }} />
    }
  ]

  const { header, icon, content, image, score } = steps[step]

  return (
    <ImageBackground source={image} style={backImage}>
      <ScrollView
        style={container}
        showsHorizontalScrollIndicator={false}
        snapToStart
        key={`screen-${step}`}>
        <View style={view}>
          <Animated.View style={{ ...view, opacity: animatedValue, margin: 10 }}>
            <TheText bold xxl color={light} centered>
              {header && header}
            </TheText>
            <IconFill
              name={icon}
              size={45}
              color='white'
              style={{ ...brandGlow, ...brandShadow, margin: 20 }}
            />
            {score && (
              <TheText xxl bold centered color='white'>
                {score}
              </TheText>
            )}
          </Animated.View>
          {content}
          {step > 0 && (
            <Button type='ghost' onPress={() => onPreviousStep()}>
              Go Back
            </Button>
          )}
        </View>
      </ScrollView>
      <WhiteSpace size='xl' />
    </ImageBackground>
  )
}

export default Onboard
