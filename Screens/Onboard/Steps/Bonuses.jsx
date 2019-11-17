import React from 'react'
import { View } from 'react-native'
import { TheText } from '../../../UI'
import styles from '../OnboardStyle'
import { Button } from '@ant-design/react-native'
import { specialTextColour, secondaryColour } from '../../../customTheme'

import { BONUS, MAX_BONUS } from '../const'

const Bonuses = ({ bonuses, next, setBonus }) => {
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialTextColour}>
        Complete each BONUS task at least once a week!
      </TheText>
      <TheText large centered color={specialTextColour}>
        Each completed BONUS earns 2 glos
      </TheText>
      {BONUS.map((bon, i) => (
        <Button key={i} style={styles.buttonStyle} key={i}>
          <TheText bold color={secondaryColour} onPress={() => setBonus(bon)}>
            {bon}
          </TheText>
        </Button>
      ))}
    </View>
  )
}

export default Bonuses
