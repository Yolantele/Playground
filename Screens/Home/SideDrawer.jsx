import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { TheText } from '../../UI'
import { bodyColour } from '../../customTheme'
import { Button, Drawer, List } from '@ant-design/react-native'
import { IconFill, IconOutline } from '@ant-design/icons-react-native'
import { primaryColour } from '../../customTheme'

const ITEMS = ['My Sprint', 'Landmarks', 'Tribe Feed']

const drawerRowStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const { Item } = List

const SideDrawer = ({ children, items = ITEMS }) => {
  const [drawer, setDrawer] = useState(false)

  const SideBar = () => (
    <ScrollView style={{ flex: 1 }}>
      <List>
        <Item>
          <View style={drawerRowStyle}>
            <TheText bold>GLO UP</TheText>
          </View>
        </Item>
        {items.map((item, index) => (
          <Item key={index}>
            <View style={drawerRowStyle}>
              <IconOutline name="smile" size={30} style={{ margin: 10, color: primaryColour }} />
              <TheText>
                {item} - {index}
              </TheText>
            </View>
          </Item>
        ))}
      </List>
    </ScrollView>
  )

  return (
    <Drawer
      sidebar={<SideBar />}
      position="left"
      // open={drawer}
      // onOpenChange={() => setDrawer(true)}
      drawerBackgroundColor={bodyColour}>
      {children}
    </Drawer>
  )
}

export default SideDrawer
