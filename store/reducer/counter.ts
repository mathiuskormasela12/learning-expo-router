import { createSlice } from '@reduxjs/toolkit'

interface IState {
  value: number
}

const initialState: IState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter-slice',
  initialState,
  reducers: {
    increment (state) {
      state.value += 1
    },
    decrement (state) {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
