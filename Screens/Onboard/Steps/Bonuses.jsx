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
        Complete each BONUS task at least once a week!
      </TheText>
      <TheText large bold centered color={specialText}>
        Earns 2 Glos each
      </TheText>
      <OneLineInput
        head='Type in Weekly BONUS items:'
        action={() => setBonus(value)}
        onChange={val => setValue(val)}
        disabled={bonuses.lenght === MAX_BONUS || value === ''}
        title='Add'
        value={value}
        placeholder={
          bonuses.length === MAX_BONUS
            ? `You have added the max ${MAX_BONUS} BONUSE`
            : 'Create your own BONUS here...'
        }
      />
      <View style={styles.card}>
        <TheCard>
          <TheText bold large color={secondary}>
            Once a Week:
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
          <TheText centered>Or choose any from Examples bellow:</TheText>
          {BONUS.map((bon, i) => (
            <>
              {!bonuses.includes(bon) && (
                <Button
                  key={i}
                  style={styles.buttonStyle}
                  key={i}
                  onPress={() => onChooseBonus(bon)}>
                  <TheText large bold color={secondary} onPress={() => onChooseBonus(bon)}>
                    {bon}
                  </TheText>
                </Button>
              )}
            </>
          ))}
        </>
      ) : (
        <>
          <TheText xl bold centered color={specialText}>
            You have chosen the max number of BONUS items, whoa !
          </TheText>
          <TheText large bold centered color={specialText}>
            Lets see how many Glos you can collect during this sprint!
          </TheText>
          <WhiteSpace sixe='xl' />
          <Button onPress={next}>
            <TheText large bold color={secondary} onPress={next}>
              Let't go 💥
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Bonuses
