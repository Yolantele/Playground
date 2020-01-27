import { COLOURS, brandGlow, brandShadow } from '../../customTheme'
import { Drawer, List } from '@ant-design/react-native'
import { IconButton, TheText } from '../../UI'
import React, { useState } from 'react'

import { IconOutline } from '@ant-design/icons-react-native'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'react-native'
import styles from './styles'

const ITEMS = ['My Sprint', 'Landmarks', 'Tribe Feed']
const { light, background, secondary, primary } = COLOURS
const { drawerRow } = styles
const { Item } = List

const GloLogo = () => (
  <TheText bold large color={light} style={{ ...brandGlow, ...brandShadow }}>
    Glo
  </TheText>
)
const SideDrawer = ({ children, items = ITEMS }) => {
  const [openDrawer, setDrawer] = useState(false)

  const SideBar = () => (
    <LinearGradient colors={[light, background]} style={{ flex: 1 }}>
      <List>
        <View>
          <Item style={{ backgroundColor: primary }}>
            <View style={{ ...drawerRow, justifyContent: 'space-between' }}>
              <GloLogo />
              <TheText bold large color={light} onPress={() => setDrawer(false)}>
                close
              </TheText>
            </View>
          </Item>
          {items.map((item, i) => (
            <Item key={`side-${i}`}>
              <View style={drawerRow}>
                <IconOutline name='smile' size={30} style={{ margin: 10, color: secondary }} />
                <TheText xl color={secondary}>
                  - {item && item.toUpperCase()}
                </TheText>
              </View>
            </Item>
          ))}
        </View>
      </List>
    </LinearGradient>
  )

  return (
    <Drawer
      sidebar={<SideBar />}
      position='left'
      open={openDrawer}
      drawerBackgroundColor={COLOURS.body}>
      <IconButton icon='menu' width={50} onPress={() => setDrawer(true)} />
      {children}
    </Drawer>
  )
}

export default SideDrawer
