
import carReducer from "./features/counter/carSlice"
import counterReducer from "./features/counter/counterSlice"
const { configureStore } = require("@reduxjs/toolkit");



const appStore = configureStore({
    reducer: {
        counter: counterReducer,
        carList: carReducer
    }
})
export default appStore