import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import axios from 'axios'
import { TheText, TheCard } from '../../UI'
import styles from './HomeStyle'
import { Button, Card, WhiteSpace } from '@ant-design/react-native'
import SideDrawer from './SideDrawer'

const QUOTE_API = 'https://favqs.com/api/qotd'

const { Footer } = Card

const QuoteSection = ({ quote }) => (
  <View style={{ width: '90%', flex: 1, justifyContent: 'center', alignItems: 'center', margin: '10%' }}>
    <TheCard>
      <TheText>{quote.body}</TheText>
      <TheText light>{quote.author}</TheText>
    </TheCard>
  </View>
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
        <View style={{ width: '90%', height: 200 }}>
          <TheCard>
            <View style={{ height: 42 }}>
              <TheText style={{ marginLeft: 16 }}>Card Content</TheText>
            </View>
            <Footer content="footer content" extra="footer extra content" />
          </TheCard>
        </View>

        <Button
          type="primary"
          onPress={() => {
            setCounter(counter + 1)
            navigate('Profile', { name: 'Jane' })
          }}>
          {`Go to Profile ${counter}`}
        </Button>
        <WhiteSpace />
        <QuoteSection quote={quote} />
      </ScrollView>
    </SideDrawer>
  )
}

export default Home
