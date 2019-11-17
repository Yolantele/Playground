import React from 'react'
import { View } from 'react-native'
import { TheText, TheCard } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace, InputItem } from '@ant-design/react-native'
import { specialTextColour, secondaryColour } from '../../../customTheme'
import { DAILIES, MAX_DAILIES } from '../const'

const Dailies = ({ setDailies, resetDailies, setValue, value, dailies, next }) => {
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialTextColour}>
        Complete each DAILY task once a day!
      </TheText>
      <TheText bold large centered color={specialTextColour}>
        Each completed DAILY earns 2 Glos a day
      </TheText>
      <WhiteSpace size="lg" />
      {
        <InputItem
          clear
          value={value}
          onChange={val => setValue(val)}
          placeholder={
            dailies.length === MAX_DAILIES
              ? `You have added the maximum of ${MAX_DAILIES} dailies 😊`
              : 'Add your DALIES here...'
          }
          extra={
            <Button
              onPress={() => setDailies(value)}
              disabled={dailies.length === MAX_DAILIES || value === ''}>
              <TheText bold color={secondaryColour} onPress={() => setDailies(value)}>
                Add
              </TheText>
            </Button>
          }
        />
      }
      <WhiteSpace size="lg" />
      {dailies.length ? (
        <View style={styles.card}>
          <TheCard>
            {dailies.map((each, i) => (
              <View style={styles.rowButton}>
                <TheText key={i} bold large centered color={secondaryColour}>
                  {i + 1} - {each}
                </TheText>
                <Button
                  style={{ width: 25 }}
                  size="small"
                  type="ghost"
                  onPress={() => {
                    let newDalies = [...dailies].filter(item => item !== each)
                    resetDailies(newDalies)
                  }}>
                  -
                </Button>
              </View>
            ))}
          </TheCard>
        </View>
      ) : null}
      <WhiteSpace size="lg" />
      {dailies.length < MAX_DAILIES ? (
        DAILIES.map((dalie, i) => (
          <Button style={styles.buttonStyle} key={i} disabled={dailies.includes(dalie)}>
            <TheText
              bold
              color={secondaryColour}
              onPress={() => !dailies.includes(dalie) && setDailies(dalie)}>
              {dalie}
            </TheText>
          </Button>
        ))
      ) : (
        <>
          <TheText xl bold centered color={specialTextColour}>
            You have chosen {MAX_DAILIES} DALIES to complete once a day ! 💃🏻
          </TheText>
          <TheText large bold centered color={specialTextColour}>
            Next on , let's set any BONUS 💥 you want to complete at least once a week!
          </TheText>
          <WhiteSpace sixe="lg" />
          <Button onPress={next}>
            <TheText bold color={secondaryColour} onPress={next}>
              Set BONUS >
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Dailies
