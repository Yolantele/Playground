import { CORE, MAX_BASE, MAX_DAILIES } from '../const'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { OneLineInput, TheCard, TheText } from '../../../UI'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText, white } = COLOURS

const Base = ({ setBaseItems, setValue, value, base, next, resetBaseItems }) => {
  const onChooseBase = each => !base.includes(each) && setBaseItems(each)
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialText}>
        Set core activity to tick-off each day:
      </TheText>
      <TheText large centered color={specialText}>
        Successfully acomplishing the core activity earns 5 Glo points
      </TheText>
      <OneLineInput
        head='Type in Core activity here:'
        action={() => setBaseItems(value)}
        onChange={val => setValue(val)}
        disabled={base.length === MAX_BASE || value === ''}
        title='Add'
        value={value}
        placeholder={
          base.length === MAX_BASE
            ? `You have added the max ${MAX_BASE} CORE activity`
            : 'Add your own CORE activity here...'
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
                <View style={styles.rowButton} key={`base-${i}`}>
                  <TheText bold large centered color={secondary}>
                    {i + 1} - {each}
                  </TheText>
                  <Button
                    style={{ width: 25 }}
                    size='small'
                    type='ghost'
                    onPress={() => {
                      const newBase = [...base].filter(item => item !== each)
                      resetBaseItems(newBase)
                    }}>
                    -
                  </Button>
                </View>
              ))
            : null}
        </TheCard>
      </View>

      <WhiteSpace size='lg' />
      {base.length < MAX_BASE ? (
        <>
          <TheText centered bold large>
            - OR -
          </TheText>

          <TheText large centered style={{ margin: 10 }}>
            Choose from the examples:
          </TheText>
          {CORE.map((each, i) => (
            <>
              {!base.includes(each) && (
                <Button
                  style={styles.buttonStyle}
                  key={`base-items-${i}`}
                  onPress={() => onChooseBase(each)}>
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
            {`You have chosen ${MAX_BASE} Core activit${
              MAX_BASE > 1 ? 'y' : 'ies'
            } for each day 👏🎬`}
          </TheText>
          <TheText large bold centered color={white}>
            {`Next, set ${MAX_DAILIES} daily tasks you want to complete each day 🙌`}
          </TheText>
          <WhiteSpace sixe='xl' />
          <Button onPress={next}>
            <TheText large bold color={secondary} onPress={next}>
              Set DAILIES 📅>
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Base
