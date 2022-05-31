import React, { useReducer } from 'react'

type CounterProps = { count: number }
type State = { 
    count: number 
    by:number
}
const initialState:State = {
    count: 0,
    by: 1
}

type IncrementAction = {
    type: 'increment',
    payload: State
}
type DecrementAction = {
    type: 'decrement',
    payload: State
}
type ResetAction = {
    type: 'reset'
}
type CounterAction = IncrementAction | DecrementAction | ResetAction

function reducer(state: State, action:CounterAction): State {

    switch (action.type) {
        case 'increment': 
            return { count: state.count + action.payload.by , by:state.by}           
        case 'decrement':
            return { count: state.count - action.payload.by , by:state.by}
        case 'reset': 
            return initialState
        default:
            return state
    }
}


const Counter = () => {

    const [state, dispatch] = useReducer(reducer ,initialState)


  return (
      <>
    <div>Counter is {state.count}</div>
    <button onClick={() => dispatch({type: 'increment', payload: {count:state.count +  state.by , by:state.by}})}>
        Increment
    </button>
    <button onClick={()=> dispatch({type: 'decrement', payload: {count:state.count - state.by, by:state.by}})}>
        Decrement
    </button>
    <button onClick={()=> dispatch({type: 'reset'})}>
        Reset
    </button>
      </>
  )
}


export default Counter