import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import axios from 'axios'
import { TheText } from '../../UI'
import styles from './HomeStyle'
import { Button } from '@ant-design/react-native'

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
      <Button
        type="primary"
        onPress={() => {
          setCounter(counter + 1)
          navigate('Profile', { name: 'Jane' })
        }}>{`Go to Profile ${counter}`}</Button>
      <View style={quotes}>
        <TheText>{quote.body}</TheText>
        <TheText light>{quote.author}</TheText>
      </View>

      {/* <Button
        
      /> */}
    </ScrollView>
  )
}

export default Home
