import { CORE, MAX_BASE, MAX_DAILIES } from '../const'
import { Button, WhiteSpace } from '@ant-design/react-native'
import { OneLineInput, TheCard, TheText } from '../../../UI'

import { COLOURS } from '../../../customTheme'
import React from 'react'
import { View } from 'react-native'
import styles from '../Style'

const { secondary, specialText, white } = COLOURS

const Core = ({ setBaseItems, setValue, value, base, next, resetBaseItems }) => {
  const onChooseBase = each => !base.includes(each) && setBaseItems(each)
  return (
    <View style={styles.section}>
      <TheText xl bold centered color={specialText}>
        Choose your Core focus:
      </TheText>
      <OneLineInput
        head='Type in here:'
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
            My Core focus for Glo Sprint is:
          </TheText>
          <WhiteSpace />
          {base && base.length
            ? base.map((each, i) => (
                <View style={styles.rowButton} key={`base-item-${i}`}>
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
          <TheText centered bold large color='white'>
            - OR -
          </TheText>
          <TheText large centered style={{ margin: 10 }}>
            Choose given Examples:
          </TheText>
          {CORE.map((each, i) => (
            <View key={'core' + i}>
              {!base.includes(each) && (
                <Button style={styles.buttonStyle} onPress={() => onChooseBase(each)}>
                  <TheText bold large color={secondary} onPress={() => onChooseBase(each)}>
                    {each}
                  </TheText>
                </Button>
              )}
            </View>
          ))}
        </>
      ) : (
        <>
          <TheText xl bold centered color={specialText}>
            {`You chose Your Core!`}
          </TheText>
          <TheText large bold centered color={white}>
            {`Next step, choose ${MAX_DAILIES} dailies! 🙌`}
          </TheText>
          <WhiteSpace sixe='xl' />
          <Button onPress={next} style={{ margin: 10 }}>
            <TheText large bold color={secondary} onPress={next}>
              Set DAILIES 📅>
            </TheText>
          </Button>
        </>
      )}
    </View>
  )
}

export default Core
