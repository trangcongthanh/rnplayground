import { RouteProp } from '@react-navigation/native'
import * as React from 'react'
import { View, Text } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { MainParams } from './Navigator'

export const WelcomeName = 'Welcome'

export type WelcomeParams = {
  [WelcomeName]?: {}
}

type WelcomeProps = {
  children?: React.ReactNode
  route: RouteProp<MainParams, 'Welcome'>
  navigation: NativeStackNavigationProp<MainParams, 'Welcome'>
}

function Welcome({}: WelcomeProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome xD</Text>
    </View>
  )
}

export default {
  name: WelcomeName as 'Welcome',
  component: Welcome,
}
