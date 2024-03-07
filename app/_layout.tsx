/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import React, { Fragment } from 'react'
import '../assets/styles.scss'
import { Provider } from 'react-redux'
import { persistor, store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'

const Layout: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    base: require('../assets/fonts/Poppins-Regular.ttf')
  })

  if (!fontsLoaded && !fontError) {
    return <Fragment />
  }
  return (
    <Provider store={store}>
     <PersistGate persistor={persistor}>
      <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
     </PersistGate>
    </Provider>
  )
}

export default Layout
