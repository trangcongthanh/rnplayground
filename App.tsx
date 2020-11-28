import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { StatusBar } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { Main } from './src/Main'

enableScreens()

type AppProps = {
  children?: React.ReactNode
}

export function App({}: AppProps) {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  )
}
