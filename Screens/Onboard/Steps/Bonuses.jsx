import { BONUS, MAX_BONUS } from '../const'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { OneLineInput, TheCard, TheText } from '../../../UI'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText } = COLOURS

const Bonuses = ({ bonuses, next, setBonus, value, setValue, resetBonus }) => {
  const onChooseBonus = bon => {
    !bonuses.includes(bon) && setBonus(bon)
  }
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialText}>
        {`Choose your Bonus to complete during the Glo sprint:`}
      </TheText>
      <OneLineInput
        head='Type in here:'
        action={() => setBonus(value)}
        onChange={val => setValue(val)}
        disabled={bonuses.lenght === MAX_BONUS || value === ''}
        title='Add'
        value={value}
        placeholder={
          bonuses.length === MAX_BONUS
            ? `You have added the max ${MAX_BONUS} BONUSE`
            : 'My Bonus is...'
        }
      />
      <View style={styles.card}>
        <TheCard>
          <TheText bold large color={secondary}>
            My Bonus is:
          </TheText>
          <WhiteSpace />
          {bonuses && bonuses.length
            ? bonuses.map((each, i) => (
                <View style={styles.rowButton} key={`bonus-${i}`}>
                  <TheText bold large centered color={secondary}>
                    {i + 1} - {each}
                  </TheText>
                  <Button
                    style={{ width: 25 }}
                    size='small'
                    type='ghost'
                    onPress={() => {
                      const newBonus = [...bonuses].filter(item => item !== each)
                      resetBonus(newBonus)
                    }}>
                    -
                  </Button>
                </View>
              ))
            : null}
        </TheCard>
      </View>
      <WhiteSpace size='lg' />
      {bonuses.length < MAX_BONUS ? (
        <>
          <TheText centered bold large color='white'>
            - OR -
          </TheText>
          <TheText centered large style={{ margin: 10 }}>
            Choose given Examples :
          </TheText>
          {BONUS.map((bon, i) => (
            <View key={i}>
              {!bonuses.includes(bon) && (
                <Button style={styles.buttonStyle} key={i} onPress={() => onChooseBonus(bon)}>
                  <TheText large bold color={secondary} onPress={() => onChooseBonus(bon)}>
                    {bon}
                  </TheText>
                </Button>
              )}
            </View>
          ))}
        </>
      ) : (
        <>
          <TheText xl bold centered color={specialText}>
            You chose your BONUS, whoa !
          </TheText>
          <TheText large bold centered>
            Lets view your Glo Sprint! 👀
          </TheText>
          <WhiteSpace sixe='xl' />
          <Button onPress={next} style={{ margin: 10 }} type='primary'>
            <TheText large bold onPress={next}>
              See Overview
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Bonuses
