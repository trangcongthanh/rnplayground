import * as React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { MainParams } from './Navigator'
import Welcome from './Welcome'

const { Navigator, Screen } = createNativeStackNavigator<MainParams>()

type MainProps = {
  children?: React.ReactNode
}

export function Main({}: MainProps) {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen {...Welcome} />
    </Navigator>
  )
}
