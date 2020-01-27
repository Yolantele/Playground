import { Button, InputItem, WhiteSpace } from '@ant-design/react-native'
import { DAILIES, INPUT_MAX, MAX_DAILIES } from '../const'
import { OneLineInput, TheCard, TheText } from '../../../UI'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText } = COLOURS

const Dailies = ({ setDailies, resetDailies, setValue, value, dailies, next }) => {
  const onChooseDailies = dailie => !dailies.includes(dailie) && setDailies(dailie)
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialText}>
        {`Choose ${MAX_DAILIES} Dailies:`}
      </TheText>
      <OneLineInput
        head='Type in here:'
        action={() => setDailies(value)}
        onChange={val => setValue(val)}
        disabled={dailies.length === MAX_DAILIES || value === ''}
        title='Add'
        value={value}
        placeholder={
          dailies.length === MAX_DAILIES
            ? `The max of ${MAX_DAILIES} Dailies added!`
            : 'My Dailies here...'
        }
      />
      {dailies.length ? (
        <View style={styles.card}>
          <TheCard>
            <TheText bold large color={secondary}>
              Once a day:
            </TheText>
            <WhiteSpace />
            {dailies.map((each, i) => (
              <View style={styles.rowButton} key={`dailies-${i}`}>
                <TheText bold large centered color={secondary}>
                  {i + 1} - {each}
                </TheText>
                <Button
                  style={{ width: 25 }}
                  size='small'
                  type='ghost'
                  onPress={() => {
                    const newDalies = [...dailies].filter(item => item !== each)
                    resetDailies(newDalies)
                  }}>
                  -
                </Button>
              </View>
            ))}
          </TheCard>
        </View>
      ) : null}
      <WhiteSpace size='xl' />
      {dailies.length < MAX_DAILIES ? (
        <>
          <TheText centered bold large color='white'>
            - OR -
          </TheText>
          <TheText centered large style={{ margin: 10 }}>
            Choose from given Examples:
          </TheText>
          {DAILIES.map((dailie, i) => (
            <View key={i}>
              {!dailies.includes(dailie) && (
                <Button onPress={() => onChooseDailies(dailie)} style={styles.buttonStyle}>
                  <TheText bold color={secondary} onPress={() => onChooseDailies(dailie)}>
                    {dailie}
                  </TheText>
                </Button>
              )}
            </View>
          ))}
        </>
      ) : (
        <>
          <TheText xl bold centered color={specialText}>
            You chose maximum Dailies! 🎉
          </TheText>
          <TheText large bold centered>
            Next, choose the BONUS! 💥
          </TheText>
          <WhiteSpace size='xl' />
          <Button onPress={next}>
            <TheText bold color={secondary} onPress={next}>
              Set BONUS >
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Dailies
