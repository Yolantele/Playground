import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import axios from 'axios'
import { TheText, TheCard } from '../../UI'
import styles from './HomeStyle'
import { Button, Card, WhiteSpace } from '@ant-design/react-native'
import SideDrawer from './SideDrawer'

const QUOTE_API = 'https://favqs.com/api/qotd'

const QuoteSection = ({ quote }) => (
  <TheCard>
    <View style={styles.quote}>
      <TheText>{quote.body && quote.body.length ? quote.body : 'test text for quote body'}</TheText>
      <TheText light>{quote.author}</TheText>
    </View>
  </TheCard>
)

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
    <SideDrawer>
      <ScrollView contentContainerStyle={container}>
        <TheCard>
          <TheText>Card Content</TheText>
        </TheCard>

        <QuoteSection quote={quote} />

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
  )
}

export default Home
