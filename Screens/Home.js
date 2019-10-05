import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, Button} from 'react-native'
import axios from 'axios'
import TheText from '../UI/TheText'

const QUOTE_API = 'https://favqs.com/api/qotd'

const Home = ({navigation}) => {
  const [counter, setCounter] = useState(0)
  const [quote, setQuote] = useState({})

  const { container } = styles
  const {navigate} = navigation

  useEffect(() => {
    axios.get(QUOTE_API)
    .then(res => setQuote(res.data.quote))
    .catch(err => console.log('error getting quote ===>', err))
  },[])


  return (
    <ScrollView contentContainerStyle={container}>
      <TheText bold>Home</TheText>
      <TheText>{quote.body}</TheText>
      <TheText light>{quote.author}</TheText>

      <Button
        title="Go to profile"
        accessibilityLabel="Go to profile Button"
        onPress={() => {
          setCounter(counter + 1)
          navigate('Profile', {name: 'Jane'})}
        }
      />
      <Text>{counter}</Text>
      
    </ScrollView>
  )

}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20
  },
})

export default Home