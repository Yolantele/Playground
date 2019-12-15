import { Button, WhiteSpace } from '@ant-design/react-native'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { SPRINT_LENGTH } from '../const'
import { TheText } from '../../../UI'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText } = COLOURS
const Length = ({ setLength }) => (
  <View style={styles.section}>
    <TheText xl bold centered color={specialText}>
      Looking for a quick glow-up, a noticable change, new habbit forming or a full-blown
      transformation ?
    </TheText>
    <WhiteSpace size="lg" />
    {SPRINT_LENGTH.map((sprint, i) => (
      <Button style={styles.buttonStyle} key={i} onPress={() => setLength(sprint)}>
        <TheText bold large color={secondary} onPress={() => setLength(sprint)}>
          {sprint.button}
        </TheText>
      </Button>
    ))}
  </View>
)

export default Length
