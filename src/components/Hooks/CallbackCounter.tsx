import { useState, useCallback, memo } from "react"

export const CallbackCounter = () => {
    const [value, setValue] = useState(0)

    const increment = () => setValue(value + 1)
    const decrement = () => setValue(value - 1)

    // memo化したcallbackにラップすることで再描画を抑制する
    const double = useCallback(() => setValue(value * 2), [])

    return <div>
        <p>Callback Counter: {value}</p>
        <DecrementButton onClick={decrement} />
        <IncrementButton onClick={increment} />
        <DoubleButton onClick={double} />
    </div>    

}

type ButtonProps = {
    onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
    console.log("Decrement 再描画")
    return <button onClick={props.onClick}>-</button>
}

// ただmemo化しただけでは再描画されてしまう
const IncrementButton = memo((props: ButtonProps) => {
    console.log("Increment 再描画")
    return <button onClick={props.onClick}>+</button>
})

const DoubleButton = memo((props: ButtonProps) => {
    console.log("Double 再描画")
    return <button onClick={props.onClick}>x2</button>
})