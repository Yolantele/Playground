import React from 'react'
import { View } from 'react-native'
import { TheText, TheCard } from '../../../UI'
import styles from '../OnboardStyle'
import { Button, InputItem, WhiteSpace } from '@ant-design/react-native'
import { specialTextColour, secondaryColour } from '../../../customTheme'
import { BASE, MAX_BASE, INPUT_MAX } from '../const'

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
      <WhiteSpace size="lg" />
      <TheText centered>Type in any BASE items :</TheText>
      <InputItem
        clear
        value={value}
        onChange={val => setValue(val)}
        maxLength={INPUT_MAX}
        placeholder={
          base.length === MAX_BASE
            ? `You have added the max ${MAX_BASE} BASE items`
            : 'Add your own BASE items here...'
        }
        extra={
          <Button
            onPress={() => setBaseItems(value)}
            disabled={base.length === MAX_BASE || value === ''}>
            <TheText bold color={secondaryColour} onPress={() => setBaseItems(value)}>
              Add
            </TheText>
          </Button>
        }
      />

      <WhiteSpace size="lg" />

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
          <TheText centered>Or add any examples from bellow:</TheText>
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
