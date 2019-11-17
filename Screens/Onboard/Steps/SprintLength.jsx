import React from 'react'
import { View } from 'react-native'
import { TheText } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { specialTextColour, secondaryColour } from '../../../customTheme'
import { SPRINT_LENGTH } from '../const'

const SprintLength = ({ setLength }) => (
  <View style={styles.section}>
    <TheText xl bold centered color={specialTextColour}>
      Looking for a quick glow-up, a noticable change, new habbit forming or a full-blown
      transformation ?
    </TheText>
    <WhiteSpace size="lg" />
    {SPRINT_LENGTH.map((sprint, i) => (
      <Button style={styles.buttonStyle} key={i}>
        <TheText bold large color={secondaryColour} onPress={() => setLength(sprint)}>
          {sprint.button}
        </TheText>
      </Button>
    ))}
  </View>
)

export default SprintLength
