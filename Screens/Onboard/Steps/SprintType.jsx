import React from 'react'
import { View } from 'react-native'
import { TheText } from '../../../UI'
import styles from '../OnboardStyle'
import { Button } from '@ant-design/react-native'
import { secondaryColour } from '../../../customTheme'
import { SPRINT_TYPE } from '../const'

const SprintType = ({ setType }) => (
  <>
    {SPRINT_TYPE.map((option, i) => (
      <View style={{ marginTop: 20, marginBottom: 20 }} key={i}>
        <TheText xl bold color={secondaryColour}>
          {option.text}
        </TheText>
        <Button style={styles.buttonStyle}>
          <TheText bold color={secondaryColour} onPress={() => setType(option.val)}>
            {option.button}
          </TheText>
        </Button>
      </View>
    ))}
  </>
)

export default SprintType
