import React from 'react'
import { View } from 'react-native'
import { TheText, TheCard, OneLineInput } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { specialTextColour, secondaryColour } from '../../../customTheme'
import { BASE, MAX_BASE } from '../const'

const Base = ({ setBaseItems, setValue, value, base, next, resetBaseItems }) => {
  const onChooseBase = each => !base.includes(each) && setBaseItems(each)
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialTextColour}>
        Set the makeup of each day for the length of your Glo sprint:
      </TheText>
      <TheText large centered color={specialTextColour}>
        Each completed BASE earns 1 Glo a day! Glos double if all completed.
      </TheText>
      <OneLineInput
        head="Type in BASE items:"
        action={() => setBaseItems(value)}
        onChange={val => setValue(val)}
        disabled={base.length === MAX_BASE || value === ''}
        title="Add"
        value={value}
        placeholder={
          base.length === MAX_BASE
            ? `You have added the max ${MAX_BASE} BASE items`
            : 'Add your own BASE items here...'
        }
      />
      {base && base.length ? (
        <View style={styles.card}>
          <TheCard>
            <TheText bold large color={secondaryColour}>
              Throughout the day:
            </TheText>
            <WhiteSpace />
            {base.map((each, i) => (
              <View style={styles.rowButton} key={i}>
                <TheText bold large centered color={secondaryColour}>
                  {i + 1} - {each}
                </TheText>
                <Button
                  style={{ width: 25 }}
                  size="small"
                  type="ghost"
                  onPress={() => {
                    let newBase = [...base].filter(item => item !== each)
                    resetBaseItems(newBase)
                  }}>
                  -
                </Button>
              </View>
            ))}
          </TheCard>
        </View>
      ) : null}
      <WhiteSpace size="lg" />
      {base.length < MAX_BASE ? (
        <>
          <TheText centered>Or choose any from Examples bellow:</TheText>
          {BASE.map((each, i) => (
            <Button
              style={styles.buttonStyle}
              key={i}
              disabled={base.includes(each)}
              onPress={() => onChooseBase(each)}>
              <TheText bold large color={secondaryColour} onPress={() => onChooseBase(each)}>
                {each}
              </TheText>
            </Button>
          ))}
        </>
      ) : (
        <>
          <TheText xl bold centered color={specialTextColour}>
            You have chosen {MAX_BASE} things as the BASE makeup for each day 👏🎬
          </TheText>
          <TheText large bold centered color={specialTextColour}>
            Next, let's set the tasks you want to complete once a day 🙌
          </TheText>
          <WhiteSpace sixe="xl" />
          <Button onPress={next}>
            <TheText large bold color={secondaryColour} onPress={next}>
              Set DAILIES >
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Base
