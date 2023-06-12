/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View  } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import Navigation from './app/Navigation'
import SplashScreen from 'react-native-splash-screen'

type SectionProps = PropsWithChildren<{
  title: string
}>

function Section({ children, title }: SectionProps): JSX.Element {

  const isDarkMode = useColorScheme() === 'dark'
  // useEffect(() => {

  //   SplashScreen.hide()
  // }, [])

  return (
    <TouchableOpacity onPress={
      ()=> SplashScreen.hide()
    }>
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  </TouchableOpacity>
  )
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
