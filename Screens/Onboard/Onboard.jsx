import React, { useState, useEffect } from 'react'
import { ScrollView, View, ImageBackground, Animated } from 'react-native'
import { TheText } from '../../UI'
import styles from './Style'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { brandShadow, brandGlow, specialTextColour, secondaryColour } from '../../customTheme'
import { ONBOARD } from '../../Assets/Images'
import { IconFill } from '@ant-design/icons-react-native'
import { MAX_BASE, MAX_DAILIES, MAX_BONUS } from './const'
import { Base, Rules, SprintLength, SprintType, Dailies, Bonuses, Intro, YourWhy } from './Steps'
import { useAnimate } from '../../Hooks'

const { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9 } = ONBOARD

const Onboard = ({ navigation }) => {
  const animatedValue = new Animated.Value(0)

  const [step, setStep] = useState(0)
  const [value, setValue] = useState('')
  const [journey, setJourney] = useState({
    sprintType: '',
    sprintLength: '',
    base: [],
    dailies: [],
    bonus: []
  })

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

  const setLength = sprint => {
    setJourney({ ...journey, sprintLength: sprint.val })
    onNextStep()
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

  const setType = val => {
    setJourney({ ...journey, sprintType: val })
    onNextStep()
  }

  const steps = [
    {
      header: 'Welcome to Glo!',
      content: <Intro next={page => setStep(step + page)} goHome={() => navigate('Home')} />,
      icon: 'fire',
      image: IMG1
    },

    {
      header: 'What kind of Sprinter are you?',
      content: <SprintType setType={val => setType(val)} />,
      icon: 'rocket',
      image: IMG2
    },
    {
      header: 'How Long do you want to sprint for?',
      content: <SprintLength setLength={sprint => setLength(sprint)} />,
      icon: 'dashboard',
      image: IMG3
    },
    {
      header: 'What is your Big WHY ?',
      content: <YourWhy nextSection={() => setStep(step + 1)} />,
      icon: 'edit',
      image: IMG4
    },
    {
      header: 'Customise your Sprint in 3 Steps & collect Glos!',
      content: <Rules next={onNextStep} />,
      icon: 'experiment',
      image: IMG5
    },
    {
      header: '1 - BASE',
      content: (
        <Base
          setBaseItems={setBaseItems}
          resetBaseItems={newSet => reSetBase(newSet)}
          setValue={setValue}
          value={value}
          base={journey.base}
          next={onNextStep}
        />
      ),
      icon: 'home',
      image: IMG6
    },
    {
      header: '2 - DAILIES',
      content: (
        <Dailies
          setDailies={setDailies}
          resetDailies={newSet => reSetDalies(newSet)}
          setValue={setValue}
          value={value}
          dailies={journey.dailies}
          next={onNextStep}
        />
      ),
      icon: 'rest',
      image: IMG7
    },
    {
      header: '3 - BONUS',
      icon: 'trophy',
      image: IMG8,
      content: (
        <Bonuses
          next={onNextStep}
          resetBonus={newSet => reSetBonus(newSet)}
          setBonus={setBonusItems}
          bonuses={journey.bonus}
          setValue={setValue}
          value={value}
        />
      )
    },
    {
      header: 'Your Sprint and Glos',
      icon: 'eye',
      image: IMG9,
      content: (
        <View style={styles.section}>
          <TheText xl bold centered color={specialTextColour}>
            Come back each day to check in with your progress and log it. Good luck with the sprint!
          </TheText>
          <Button style={{ ...brandShadow, ...brandGlow, margin: 20 }}>
            <TheText bold color={secondaryColour} onPress={() => navigate('Home', { journey })}>
              Go to Home >
            </TheText>
          </Button>
        </View>
      )
    }
  ]

  const { container, backImage, view } = styles
  const { navigate } = navigation
  const { header, icon, content, image } = steps[step]
  return (
    <ImageBackground source={image} style={backImage}>
      <ScrollView style={container} showsHorizontalScrollIndicator={false} snapToStart={true}>
        <View style={view}>
          <Animated.View style={{ ...view, opacity: animatedValue }}>
            <TheText bold xxl color={'white'} centered>
              {header && header}
            </TheText>
            <IconFill
              name={icon}
              size={45}
              color={'white'}
              style={{ ...brandGlow, ...brandShadow, margin: 20 }}
            />
          </Animated.View>

          {content}
          {step > 0 && (
            <Button type="ghost" onPress={() => onPreviousStep()}>
              Go Back
            </Button>
          )}
        </View>
      </ScrollView>
      <WhiteSpace size="xl" />
    </ImageBackground>
  )
}

export default Onboard
