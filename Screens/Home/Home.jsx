import React, { useState, useEffect } from 'react'
import { ScrollView, Button, View } from 'react-native'
import axios from 'axios'
import { TheText } from '../../UI'
import styles from './HomeStyle'

const QUOTE_API = 'https://favqs.com/api/qotd'

const Home = ({ navigation }) => {
  const [counter, setCounter] = useState(0)
  const [quote, setQuote] = useState({})

  const { container, quotes } = styles
  const { navigate } = navigation

  useEffect(() => {
    axios
      .get(QUOTE_API)
      .then(res => setQuote(res.data.quote))
      .catch(err => console.log('error getting quote ===>', err))
  }, [])

  return (
    <ScrollView contentContainerStyle={container}>
      <TheText bold>Home</TheText>
      <View style={quotes}>
        <TheText>{quote.body}</TheText>
        <TheText light>{quote.author}</TheText>
      </View>

      <Button
        title={`Go to Profile ${counter}`}
        accessibilityLabel="Go to profile Button"
        onPress={() => {
          setCounter(counter + 1)
          navigate('Profile', { name: 'Jane' })
        }}
      />
    </ScrollView>
  )
}

export default Home
