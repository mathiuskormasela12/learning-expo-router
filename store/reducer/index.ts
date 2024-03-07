import storage from '@react-native-async-storage/async-storage'
import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counter'
import { persistReducer } from 'redux-persist'

const rootPersistConfig = {
  key: 'root',
  blacklist: [],
  storage,
  version: 1
}

const rootReducer = combineReducers({
  counterReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
