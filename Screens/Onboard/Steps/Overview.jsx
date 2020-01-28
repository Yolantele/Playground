import { View } from 'react-native'
import { Button } from '@ant-design/react-native'
import { COLOURS, brandGlow, brandShadow } from '../../../customTheme'
import React from 'react'

import { TheText } from '../../../UI'
import styles from '../Style'

const { specialText } = COLOURS
const borderStyle = {
  borderBottomWidth: 1,
  width: 200,
  alignSelf: 'center',
  margin: 20,
  borderColor: 'white',
  ...brandGlow
}

const BorderSpace = () => <View style={borderStyle} />

const OverView = ({ journey, navigate }) => (
  <View style={styles.section}>
    <TheText xl centered color={specialText}>
      Core focus:
    </TheText>
    <TheText xxl bold centered color='white'>
      '{journey.base}'
    </TheText>
    <TheText bold centered>
      Earn 35 Glos over the Sprint
    </TheText>
    <BorderSpace />
    <TheText xl centered color={specialText}>
      Dailies:
    </TheText>
    <View>
      {journey.dailies.map((each, i) => (
        <TheText xl bold centered color='white' key={'item' + i}>
          ✓ - {each}
        </TheText>
      ))}
    </View>
    <TheText bold centered>
      Earn 42 Glos over the Sprint
    </TheText>
    <BorderSpace />
    <TheText xl centered color={specialText}>
      Bonus:
    </TheText>
    <TheText xl bold centered color='white'>
      {journey.bonus}
    </TheText>
    <TheText bold centered>
      Earn 5 Glos over the Sprint
    </TheText>
    <BorderSpace />
    <TheText xl centered color={specialText}>
      Earn a total of
    </TheText>
    <TheText xxxl centered bold color='white'>
      82
    </TheText>
    <TheText xxl centered bold color='white'>
      Glos
    </TheText>

    <Button style={{ ...brandShadow, ...brandGlow, margin: 20 }} type='primary'>
      <TheText bold onPress={() => navigate('Home', { journey })}>
        Start your Glo Sprint !
      </TheText>
    </Button>
  </View>
)

export default OverView
