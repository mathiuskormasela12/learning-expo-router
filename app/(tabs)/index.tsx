import { useRouter } from 'expo-router'
import React, { useCallback } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { type AppDispatch, type RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../store/reducer/counter'

const Home: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const count: number = useSelector((state: RootState) => state.counterReducer.value)

  const handleIncrement = useCallback(() => {
    dispatch(increment())
    if (count === 4) {
      setTimeout(() => {
        router.push(`/(tabs)/user/router-${count + 1}`)
      }, 0)
    }
  }, [count, router])

  if (Platform.OS === 'web') {
    return (
      <div className='page'>
        <p className='text'>Counter ({Platform.OS}) {count}</p>
        <p className='text' onClick={handleIncrement}>Increment</p>
      </div>
    )
  }

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Counter ({Platform.OS}) {count}</Text>
      <Text style={styles.text} onPress={handleIncrement}>Increment</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    fontFamily: 'base'
  }
})
