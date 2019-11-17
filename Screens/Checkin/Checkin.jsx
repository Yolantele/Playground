import { View, Text } from 'react-native'
import { TheText, Branding, IconButton, TheCard } from '../../UI'
import React from 'react'

const Checkin = () => (
  <Branding>
    <TheCard>
      <TheText large>
        Check in your base, dailies and bonus progress for the day via voice memo
      </TheText>
    </TheCard>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '90%'
      }}>
      <IconButton icon={'audio'} />
      <IconButton icon={'smile'} />
      <IconButton icon={'rest'} />
      <IconButton icon={'experiment'} />
      <IconButton icon={'home'} />
      <IconButton icon={'fire'} />
      <IconButton icon={'rocket'} />
      <IconButton icon={'trophy'} />
      <IconButton icon={'eye'} />
      <IconButton icon={'gift'} />
      <IconButton filled icon={'edit'}></IconButton>

      <IconButton filled icon={'audio'} />
      <IconButton filled icon={'smile'} />
      <IconButton filled icon={'rest'} />
      <IconButton filled icon={'experiment'} />
      <IconButton filled icon={'home'} />
      <IconButton filled icon={'fire'} />
      <IconButton filled icon={'rocket'} />
      <IconButton filled icon={'trophy'} />
      <IconButton filled icon={'eye'} />
      <IconButton filled icon={'edit'} />
      <IconButton filled icon={'gift'} />
    </View>
  </Branding>
)

export default Checkin
