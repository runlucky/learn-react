import { useState, useCallback } from "react"

export const CallbackCounter = () => {
    const [value, setValue] = useState(0)

    const increment = () => setValue(value + 1)
    const decrement = () => setValue(value - 1)
    const double = useCallback(() => setValue(value * 2), [])

    return <div>
        <p>Callback Counter: {value}</p>
        
    </div>    

}
