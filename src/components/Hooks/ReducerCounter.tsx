import { useReducer } from "react"

enum ReduceAction {
    increment, decrement, double, reset
}

// ロジックをView(ReducerCounter)から追い出している
const reducer = (currentValue: number, action: ReduceAction) => {
    switch (action) {
        case ReduceAction.increment: return currentValue + 1
        case ReduceAction.decrement: return currentValue - 1
        case ReduceAction.double: return currentValue * 2
        case ReduceAction.reset: return 0
    }
}

// userReducerを用いたカウンター
const ReducerCounter = (props: { initialValue: number }) => {
    const {initialValue} = props
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
    <div>
        <p>userReducer Counter: {count}</p>
        <button onClick={() => dispatch(ReduceAction.increment)}>+</button>
        <button onClick={() => dispatch(ReduceAction.decrement)}>-</button>
        <button onClick={() => dispatch(ReduceAction.double)}>x2</button>
        <button onClick={() => dispatch(ReduceAction.reset)}>!!</button>
    </div>
    )
}

export default ReducerCounter