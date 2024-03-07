import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const User: React.FC = () => {
  const { name } = useLocalSearchParams<{ name: string }>()

  if (Platform.OS === 'web') {
    return (
      <div className='page'>
        <div className='text'>Query: {name}</div>
      </div>
    )
  }

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Query: {name}</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18
  }
})
