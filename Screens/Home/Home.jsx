import { Button, WhiteSpace } from '@ant-design/react-native'
import { COLOURS, brandShadow } from '../../customTheme'
import { FlipTimer, TheCard, TheText } from '../../UI'
import React, { useEffect, useState } from 'react'
import { ScrollView, View, ImageBackground } from 'react-native'
import { IMG } from '../../Assets/Images'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

const { light, background, primary, secondary, specialText } = COLOURS
const Home = ({ navigation }) => {
  const [counter, setCounter] = useState(0)
  const { container, header, points } = styles
  const { navigate } = navigation

  const onPressButton = () => {
    setCounter(counter + 1)
    // navigate('Profile', { name: 'Jane' })
  }
  return (
    <LinearGradient colors={[light, background]} style={{ flex: 1 }}>
      <ImageBackground
        source={IMG.MOUNTAIN_PURPLE}
        style={{ width: '100%', height: '100%', opacity: 0.8 }}>
        <ScrollView contentContainerStyle={{ ...container, marginTop: '15%', margin: 10 }}>
          <Button
            style={{ margin: 10, alignSelf: 'center' }}
            type='primary'
            onPress={() => onPressButton()}>
            <TheText xl bold onPress={() => onPressButton()}>
              {`Glos ${counter} / 82`}
            </TheText>
          </Button>
        </ScrollView>
      </ImageBackground>
    </LinearGradient>
  )
}

export default Home
