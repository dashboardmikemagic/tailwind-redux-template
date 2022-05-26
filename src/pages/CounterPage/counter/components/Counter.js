import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../../redux/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          class="bg-sky-600 hover:bg-sky-700 focus:ring-blue-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          class="bg-blue-100 hover:bg-blue-400 active:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}