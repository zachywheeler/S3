import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import characters from '../characters/characters.json'
import { CharacterGrid, SelectedCharacters, Button } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
  },
})

function Home() {
  const navigation = useNavigation()
  // const [season, setSeason] = React.useState(null)
  const [character1, setCharacter1] = useState()
  const [character2, setCharacter2] = useState()
  const [character3, setCharacter3] = useState()

  const { data: charaterData } = characters
  const [data, setData] = useState(charaterData[0].characters)

  function onPress() {
    navigation.navigate('Settings')
  }

  return (
    <SafeAreaView style={styles.container}>
      <CharacterGrid
        data={data}
        setCharacter1={setCharacter1}
        setCharacter2={setCharacter2}
        setCharacter3={setCharacter3}
        character1={character1}
        character2={character2}
        character3={character3}
      />
      {/* <SeasonsSelector season={season} setSeason={setSeason} /> */}
      <SelectedCharacters character1={character1} character2={character2} character3={character3} />
      <Button text="settings" color={'white'} style={styles.button} onPress={onPress} />
    </SafeAreaView>
  )
}

export default Home
