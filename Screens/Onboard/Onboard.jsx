import React, { useState, useEffect } from 'react'
import { ScrollView, View, ImageBackground } from 'react-native'
import { TheText } from '../../UI'
import styles from './OnboardStyle'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { brandShadow, brandGlow, specialTextColour, secondaryColour } from '../../customTheme'
import { ONBOARD, ONBOARD_2, ONBOARD_3 } from '../../Assets/Images'
import { IconFill } from '@ant-design/icons-react-native'
import { MAX_BASE, MAX_DAILIES, MAX_BONUS } from './const'
import { Base, Rules, SprintLength, SprintType, Dailies, Bonuses, Intro, YourWhy } from './Steps'

const Onboard = ({ navigation }) => {
  const [step, setStep] = useState(0)
  const [value, setValue] = useState('')
  const [journey, setJourney] = useState({
    sprintType: '',
    sprintLength: '',
    base: [],
    dailies: [],
    bonus: []
  })

  const setBaseItems = value => {
    setJourney({ ...journey, base: [...journey.base, value] })
    setValue('')
    if (journey.base.length === MAX_BASE) setStep(step + 1)
  }

  const setDailies = dalie => {
    setJourney({ ...journey, dailies: [...journey.dailies, dalie] })
    setValue('')
    if (journey.dailies.length === MAX_DAILIES) setStep(step + 1)
  }

  const setBonusItems = bon => {
    setJourney({ ...journey, bonus: [...journey.bonus, bon] })
    setValue('')
    if (journey.bonus.length === MAX_BONUS) setStep(step + 1)
  }

  const setLength = sprint => {
    setStep(step + 1)
    setJourney({ ...journey, sprintLength: sprint.val })
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
    setStep(step + 1)
    setJourney({ ...journey, sprintType: val })
  }

  const steps = [
    {
      header: 'Welcome to Glo!',
      content: <Intro next={page => setStep(step + page)} goHome={() => navigate('Home')} />,
      icon: 'fire',
      image: ONBOARD
    },

    {
      header: 'What kind of Sprinter are you?',
      content: <SprintType setType={() => setType()} />,
      icon: 'rocket',
      image: ONBOARD_2
    },
    {
      header: 'How Long do you want to sprint for?',
      content: <SprintLength setLength={sprint => setLength(sprint)} />,
      icon: 'dashboard',
      image: ONBOARD_3
    },
    {
      header: 'What is your Big WHY ?',
      content: <YourWhy nextSection={() => setStep(step + 1)} />,
      icon: 'edit',
      image: ONBOARD_3
    },
    {
      header: 'Customise Your Sprint in 3 steps and collect Glo points!',
      content: <Rules next={() => setStep(step + 1)} />,
      icon: 'experiment',
      image: ONBOARD_3
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
          next={() => setStep(step + 1)}
        />
      ),
      icon: 'home',
      image: ONBOARD
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
          next={() => setStep(step + 1)}
        />
      ),
      icon: 'rest',
      image: ONBOARD
    },
    {
      header: '3 - BONUS',
      icon: 'trophy',
      image: ONBOARD,
      content: (
        <Bonuses
          next={() => setStep(step + 1)}
          resetBonus={newSet => reSetBonus(newSet)}
          setBonus={setBonusItems}
          bonuses={journey.bonus}
          setValue={setValue}
          value={value}
        />
      )
    },
    {
      header: 'Your Sprint and Glo points',
      icon: 'eye',
      image: ONBOARD_3,
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
          <TheText bold xxl color={'white'} centered>
            {header && header}
          </TheText>
          <IconFill
            name={icon}
            size={45}
            color={'white'}
            style={{ ...brandGlow, ...brandShadow, margin: 20 }}
          />
          {content}
          {step > 0 && (
            <Button type="ghost" onPress={() => setStep(step - 1)}>
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
