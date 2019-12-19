import { Button, Card, WhiteSpace } from '@ant-design/react-native'
import { FlipTimer, IconButton, TheCard, TheText } from '../../UI'
import { IconFill, IconOutline } from '@ant-design/icons-react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { COLOURS } from '../../customTheme'
import LinearGradient from 'react-native-linear-gradient'
import SideDrawer from './SideDrawer'
import axios from 'axios'
import styles from './HomeStyle'

//TODO:
// 1. Amend Card look to modernize it
// 2. Add time Flipper for 'Left of Current Sprint'
// 3. Add checkin buttons for BASE, DAILIES, BONUS
// 4. Log Progress with Photos optional
// 5. Notifications ?..

const QUOTE_API = 'https://favqs.com/api/qotd'
const { secondary } = COLOURS
const QuoteSection = ({ quote }) => (
  <View style={styles.quote}>
    <TheText large centered bold color={secondary}>
      {quote.body && quote.body.length ? quote.body : 'test text for quote body'}
    </TheText>
    <TheText light centered color={secondary}>
      {quote.author}
    </TheText>
    <WhiteSpace size="xl" />
  </View>
)

const linearGradient = {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5
}

const { light, background, primary } = COLOURS
const Home = ({ navigation }) => {
  const [counter, setCounter] = useState(0)
  const [quote, setQuote] = useState({})
  const { container } = styles
  const { navigate } = navigation

  useEffect(() => {
    axios
      .get(QUOTE_API)
      .then(res => setQuote(res.data.quote))
      .catch(err => console.log('error getting quote ===>', err))
  }, [])

  return (
    <LinearGradient colors={[light, light, background]} style={linearGradient}>
      <SideDrawer>
        <ScrollView contentContainerStyle={container}>
          <TheText xxl bold centered color={primary}>
            Sprint Remainig
          </TheText>
          <FlipTimer />
          <QuoteSection quote={quote} />
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
