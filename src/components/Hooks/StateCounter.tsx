import { useReducer, useState } from "react"

// userStateを用いたカウンター
const StateCounter = (props: { initialValue: number }) => {
    const { initialValue } = props

    const [count, setCount] = useState(initialValue)

    return (
    <div>
        <p>useState Counter: {count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
        {/* setCountはcallback版もある */}
        <button onClick={() => setCount((prevCount) => prevCount + 1 )}>+</button>
    </div>
    )

}

export default StateCounter
