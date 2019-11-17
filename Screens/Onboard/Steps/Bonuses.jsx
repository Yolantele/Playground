import React from 'react'
import { View } from 'react-native'
import { TheText, TheCard, OneLineInput } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { specialTextColour, secondaryColour } from '../../../customTheme'
import { BONUS, MAX_BONUS } from '../const'

const Bonuses = ({ bonuses, next, setBonus, value, setValue, resetBonus }) => {
  const onChooseBonus = bon => {
    !bonuses.includes(bon) && setBonus(bon)
  }
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialTextColour}>
        Complete each BONUS task at least once a week!
      </TheText>
      <TheText large bold centered color={specialTextColour}>
        Earns 2 glo points each
      </TheText>
      <OneLineInput
        head="Type in Weekly BONUS items:"
        action={() => setBonus(value)}
        onChange={val => setValue(val)}
        disabled={bonuses.lenght === MAX_BONUS || value === ''}
        title="Add"
        value={value}
        placeholder={
          bonuses.length === MAX_BONUS
            ? `You have added the max ${MAX_BONUS} BONUSES`
            : 'Add your own BONUS here...'
        }
      />
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
          <TheText centered>Or choose any from Examples bellow:</TheText>
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
