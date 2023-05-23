import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        addCar: (state, actioin) => {
            state.push(actioin.payload)
        },
        removeCar: (state, action) => {
            state = state.filter(car => car.name !== action.payload)
        }
    }
})
export const { addCar, removeCar } = carSlice.actions
export default carSlice.reducer