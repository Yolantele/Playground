import React, { useState, useEffect } from 'react'
import { ScrollView, View, ImageBackground } from 'react-native'
import { TheText, TheCard } from '../../UI'
import styles from './OnboardStyle'
import { Button } from '@ant-design/react-native'
import { IconFill } from '@ant-design/icons-react-native'
import { brandShadow, brandGlow, specialTextColour, secondaryColour } from '../../customTheme'
import { ONBOARD, ONBOARD_2, ONBOARD_3 } from '../../Assets/Images'
import { SPRINT_LENGTH, SPRINT_TYPE, BASE, DAILIES, BONUS, RULES } from './const'
const buttonStyle = { margin: 5, ...brandShadow, ...brandGlow }

const Onboard = ({ navigation }) => {
  const [step, setStep] = useState(0)
  const [journey, setJourney] = useState({ sprintType: '' })

  const steps = [
    {
      header: 'Welcome to GLO UP!',
      content: (
        <View style={styles.section}>
          <TheCard>
            <TheText bold xl color={secondaryColour}>
              We're happy to see you here and start the GLO UP Sprint. Lets set it unique to You!
            </TheText>
          </TheCard>
          <Button style={{ ...buttonStyle, margin: 10 }}>
            <TheText bold color={secondaryColour} onPress={() => setStep(step + 1)}>
              Let's Go! 🤸🏻‍
            </TheText>
          </Button>
          <Button
            type="ghost"
            onPress={() => navigate('Home')}
            style={{ ...buttonStyle, margin: 10 }}>
            Skip Setup
          </Button>
        </View>
      ),
      icon: 'fire',
      image: ONBOARD
    },
    {
      header: 'What kind of Sprinter are you?',
      content: (
        <>
          {SPRINT_TYPE.map((option, i) => (
            <View style={{ marginTop: 20, marginBottom: 20 }} key={i}>
              <TheText xl bold color={secondaryColour}>
                {option.text}
              </TheText>
              <Button style={buttonStyle}>
                <TheText
                  bold
                  color={secondaryColour}
                  onPress={() => {
                    setStep(step + 1)
                    setJourney({ ...journey, sprintType: option.val })
                  }}>
                  {option.button}
                </TheText>
              </Button>
            </View>
          ))}
        </>
      ),
      icon: 'rocket',
      image: ONBOARD_2
    },
    {
      header: 'How Long do you want to sprint for?',
      content: (
        <View style={styles.section}>
          <TheText xl bold centered color={specialTextColour}>
            Go for a quick glow-up, a noticable change, new habbit forming or a full-blown
            transformation
          </TheText>

          {SPRINT_LENGTH.map((sprint, i) => (
            <Button style={buttonStyle} key={i}>
              <TheText
                bold
                color={secondaryColour}
                onPress={() => {
                  setStep(step + 1)
                  setJourney({ ...journey, sprintLength: sprint.val })
                }}>
                {sprint.button}
              </TheText>
            </Button>
          ))}
        </View>
      ),
      icon: 'dashboard',
      image: ONBOARD_3
    },
    {
      header: 'Customise Your Sprint in 3 steps and collect Glo points!',
      content: (
        <View style={styles.section}>
          {RULES.map((each, i) => (
            <View style={{ margin: 10 }} key={i}>
              <TheText xl bold centered color={specialTextColour}>
                {each.head}
              </TheText>
              <TheText xl bold centered color={'white'}>
                {each.text}
              </TheText>
            </View>
          ))}
          <Button style={buttonStyle}>
            <TheText bold color={secondaryColour} onPress={() => setStep(step + 1)}>
              Set Base >
            </TheText>
          </Button>
        </View>
      ),
      icon: 'experiment',
      image: ONBOARD
    },
    {
      header: '1 BASE',
      content: (
        <View style={styles.section}>
          <TheText xl bold centered color={specialTextColour}>
            Set the makeup of each day for the length of your GLO UP sprint:
          </TheText>
          <TheText large centered color={specialTextColour}>
            Each completed BASE earns 1 Glo a day! Glos double if all completed.
          </TheText>
          {BASE.map((base, i) => (
            <Button style={buttonStyle} key={i}>
              <TheText
                bold
                color={secondaryColour}
                onPress={() => {
                  setStep(step + 1)
                  setJourney({ ...journey, base })
                }}>
                {base}
              </TheText>
            </Button>
          ))}
        </View>
      ),
      icon: 'home',
      image: ONBOARD_2
    },
    {
      header: '2 DALIES',
      content: (
        <View style={styles.section}>
          <TheText xl bold centered color={specialTextColour}>
            Complete each DAILY task once a day!
          </TheText>
          <TheText large centered color={specialTextColour}>
            Each completed DAILY earns 2 Glos a day
          </TheText>
          {DAILIES.map((dalies, i) => (
            <Button style={buttonStyle} key={i}>
              <TheText
                bold
                color={secondaryColour}
                onPress={() => {
                  setStep(step + 1)
                  setJourney({ ...journey, dalies })
                }}>
                {dalies}
              </TheText>
            </Button>
          ))}
        </View>
      ),
      icon: 'rest',
      image: ONBOARD_3
    },
    {
      header: '3 BONUS',
      icon: 'trophy',
      image: ONBOARD,
      content: (
        <View style={styles.section}>
          <TheText xl bold centered color={specialTextColour}>
            Complete each BONUS task at least once a week!
          </TheText>
          <TheText large centered color={specialTextColour}>
            Each completed BONUS earns 2 glos
          </TheText>
          {BONUS.map((bonus, i) => (
            <Button key={i} style={{ margin: 5, ...brandShadow, ...brandGlow }} key={i}>
              <TheText
                bold
                color={secondaryColour}
                onPress={() => {
                  setStep(step + 1)
                  setJourney({ ...journey, bonus })
                }}>
                {bonus}
              </TheText>
            </Button>
          ))}
        </View>
      )
    },
    {
      header: 'All set! You are ready to start your Sprint!',
      icon: 'eye',
      image: ONBOARD_2,
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
  const { header, icon, index, content, image } = steps[step]
  return (
    <ImageBackground source={image} style={backImage}>
      <ScrollView style={container}>
        <View style={view}>
          <TheText bold xxl color={'white'} centered>
            {header}
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
    </ImageBackground>
  )
}

export default Onboard
