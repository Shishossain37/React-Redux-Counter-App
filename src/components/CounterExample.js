import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue, decrementByValue } from '../app/features/counter/counterSlice'


const CounterExample = () => {
    const count = useSelector((state) => {
        return state.counter.value
    })
    const dispatch = useDispatch()
    return (
        <div>
            Counter Value:{count}
            <button onClick={() => {
                dispatch(increment())
            }}>Increment</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrement</button>
            <button onClick={() => {
                dispatch(incrementByValue(5))
            }}>Increment by 5</button>
            <button onClick={() => {
                dispatch(decrementByValue(5))
            }}>Decrement by 5</button>
        </div>
    )
}

export default CounterExample
