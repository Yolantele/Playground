import { Button, WhiteSpace } from '@ant-design/react-native'
import { COLOURS, brandShadow } from '../../customTheme'
import { FlipTimer, TheCard, TheText } from '../../UI'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import SideDrawer from './SideDrawer'
import axios from 'axios'
import styles from './styles'

//TODO:
// 3. Add checkin buttons for BASE, DAILIES, BONUS
// 4. Log Progress with Photos optional
// 5. Notifications ?..

const QUOTE_API = 'https://favqs.com/api/qotd'

const QuoteSection = ({ quote }) => (
  <View style={styles.quote}>
    <TheText large centered bold color={specialText}>
      {quote.body && quote.body.length
        ? quote.body
        : 'test text for quote body, test text for quote body is here '}
    </TheText>
    <TheText light centered color={specialText}>
      {quote.author}
    </TheText>
    <WhiteSpace size="xl" />
  </View>
)

const { light, background, primary, secondary, specialText } = COLOURS
const Home = ({ navigation }) => {
  const [counter, setCounter] = useState(0)
  const [quote, setQuote] = useState({})
  const { container, header, points } = styles
  const { navigate } = navigation

  useEffect(() => {
    axios
      .get(QUOTE_API)
      .then(res => setQuote(res.data.quote))
      .catch(err => console.log('error getting quote ===>', err))
  }, [])

  const SprintBoard = () => (
    <View style={header}>
      <TheText xxl bold centered color={primary}>
        Sprint Remainig
      </TheText>
      <FlipTimer />

      <TheText xl bold centered color={secondary}>
        collected so far:
      </TheText>

      <View style={points}>
        <TheText xxxl bold centered color={primary}>
          267
        </TheText>
        <TheText xxxl bold centered color={light}>
          {' Glos'}
        </TheText>
      </View>

      <TheText xl bold centered color={secondary}>
        out of 1240 Glos
      </TheText>
      <WhiteSpace />
      <QuoteSection quote={quote} />
    </View>
  )

  return (
    <LinearGradient colors={[light, background]} style={{ flex: 1 }}>
      <SideDrawer>
        <ScrollView contentContainerStyle={container}>
          <SprintBoard />
          <WhiteSpace size="xl" />
          <TheCard>
            <TheText>Card Content</TheText>
          </TheCard>

          <Button
            style={{ margin: 10 }}
            type="primary"
            onPress={() => {
              setCounter(counter + 1)
              navigate('Profile', { name: 'Jane' })
            }}>
            {`Go to Profile ${counter}`}
          </Button>
        </ScrollView>
      </SideDrawer>
    </LinearGradient>
  )
}

export default Home
