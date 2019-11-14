import { View } from 'react-native'
import { TheText, Branding, IconButton, TheCard } from '../../UI'
import React from 'react'

const Checkin = () => (
  <Branding>
    <View style={{ width: '90%' }}>
      <TheCard>
        <TheText large>Check in your base, dailies and bonus progress for the day via voice memo</TheText>
      </TheCard>
      <IconButton icon={'audio'} />
    </View>
  </Branding>
)

export default Checkin
