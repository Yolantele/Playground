import { View, ScrollView } from 'react-native'
import React from 'react'

const brandStyle = { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }

const Branding = ({ children }) => <View style={brandStyle}>{children}</View>

export default Branding
