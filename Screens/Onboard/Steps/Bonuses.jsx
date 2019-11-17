import React from 'react'
import { View } from 'react-native'
import { TheText, TheCard } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace, InputItem } from '@ant-design/react-native'
import { specialTextColour, secondaryColour } from '../../../customTheme'
import { BONUS, MAX_BONUS, INPUT_MAX } from '../const'

const Bonuses = ({ bonuses, next, setBonus, value, setValue, resetBonus }) => {
  const onChooseBonus = bon => {
    !bonuses.includes(bon) && setBonus(bon)
  }
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialTextColour}>
        Complete each BONUS task at least once a week!
      </TheText>
      <TheText large centered color={specialTextColour}>
        Each completed BONUS earns 2 glos
      </TheText>
      <WhiteSpace size="lg" />
      <TheText centered>Type in any Weekly BONUS items:</TheText>
      <InputItem
        style={{ margin: 10, marginTop: 20 }}
        clear
        maxLength={INPUT_MAX}
        value={value}
        onChange={val => setValue(val)}
        placeholder={
          bonuses.length === MAX_BONUS
            ? `You have added the max ${MAX_BONUS} BONUSES`
            : 'Add your own BONUS here...'
        }
        extra={
          <Button
            onPress={() => setBonus(value)}
            disabled={bonuses.lenght === MAX_BONUS || value === ''}>
            <TheText bold color={secondaryColour} onPress={() => setBonus(value)}>
              Add
            </TheText>
          </Button>
        }
      />
      <WhiteSpace size="lg" />
      {bonuses.length ? (
        <View style={styles.card}>
          <TheCard>
            <TheText bold large color={secondaryColour}>
              Once a Week:
            </TheText>
            <WhiteSpace />
            {bonuses.map((each, i) => (
              <View style={styles.rowButton} key={i}>
                <TheText bold large centered color={secondaryColour}>
                  {i + 1} - {each}
                </TheText>
                <Button
                  style={{ width: 25 }}
                  size="small"
                  type="ghost"
                  onPress={() => {
                    let newBonus = [...bonuses].filter(item => item !== each)
                    resetBonus(newBonus)
                  }}>
                  -
                </Button>
              </View>
            ))}
          </TheCard>
        </View>
      ) : null}
      <WhiteSpace size="lg" />
      {bonuses.length < MAX_BONUS ? (
        <>
          <TheText centered>Or add any Examples from bellow</TheText>
          {BONUS.map((bon, i) => (
            <Button
              key={i}
              style={styles.buttonStyle}
              key={i}
              disabled={bonuses.includes(bon)}
              onPress={() => onChooseBonus(bon)}>
              <TheText large bold color={secondaryColour} onPress={() => onChooseBonus(bon)}>
                {bon}
              </TheText>
            </Button>
          ))}
        </>
      ) : (
        <>
          <TheText xl bold centered color={specialTextColour}>
            You have chosen the max number of BONUS items, whoa !
          </TheText>
          <TheText large bold centered color={specialTextColour}>
            Lets see how many Glo points you can collect during this sprint!
          </TheText>
          <WhiteSpace sixe="xl" />
          <Button onPress={next}>
            <TheText large bold color={secondaryColour} onPress={next}>
              Let't go 💥
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Bonuses
