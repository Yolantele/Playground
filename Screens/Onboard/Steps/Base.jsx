import { BASE, MAX_BASE } from '../const'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { OneLineInput, TheCard, TheText } from '../../../UI'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText } = COLOURS

const Base = ({ setBaseItems, setValue, value, base, next, resetBaseItems }) => {
  const onChooseBase = each => !base.includes(each) && setBaseItems(each)
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialText}>
        Set the makeup of each day for the length of your Glo sprint:
      </TheText>
      <TheText large centered color={specialText}>
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
      <View style={styles.card}>
        <TheCard>
          <TheText bold large color={secondary}>
            Throughout the day:
          </TheText>
          <WhiteSpace />
          {base && base.length
            ? base.map((each, i) => (
                <View style={styles.rowButton} key={i}>
                  <TheText bold large centered color={secondary}>
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
              ))
            : null}
        </TheCard>
      </View>

      <WhiteSpace size="lg" />
      {base.length < MAX_BASE ? (
        <>
          <TheText centered>Or choose any from Examples bellow:</TheText>
          {BASE.map((each, i) => (
            <>
              {!base.includes(each) && (
                <Button style={styles.buttonStyle} key={i} onPress={() => onChooseBase(each)}>
                  <TheText bold large color={secondary} onPress={() => onChooseBase(each)}>
                    {each}
                  </TheText>
                </Button>
              )}
            </>
          ))}
        </>
      ) : (
        <>
          <TheText xl bold centered color={specialText}>
            You have chosen {MAX_BASE} things as the BASE makeup for each day 👏🎬
          </TheText>
          <TheText large bold centered color={specialText}>
            Next, let's set the tasks you want to complete once a day 🙌
          </TheText>
          <WhiteSpace sixe="xl" />
          <Button onPress={next}>
            <TheText large bold color={secondary} onPress={next}>
              Set DAILIES >
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Base
