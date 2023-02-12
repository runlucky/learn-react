import { useState, memo } from "react"

export const FizzBuzz2 = () => {
    const [ value, setValue ] = useState(1)
    
    console.log(`count: ${value}`)

    // このviewが再描画されるたびにこのcallbackも再生成される
    // そのためBuzzのmemo化を貫通してBuzzも再描画される
    // これはcallbackやオブジェクトを渡したときに発生する
    const onBuzzClick = () => { console.log("Buzz Clicked") }

    return(
    <div>
        <p>FizzBuzz Callback: {value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
        <p>
            <button onClick={() => setValue(1)}>!!!</button>
            <Fizz show={value % 3 === 0} />
            <Buzz show={value % 5 === 0} onClick={onBuzzClick} />
        </p>
    </div>
    )
}

const Fizz = (props: {show: boolean}) => {
    console.log(`${props.show}: Fizz`)
    return <span>{props.show ? "Fizz" : "-"}</span>
}

type BuzzProps = {
    show: boolean
    onClick: () => void
}
const Buzz = memo<BuzzProps>((props) => {
    const { show, onClick } = props
    console.log(`${show}: Buzz`)
    return <span onClick={onClick}>{ show ? "Buzz" : "-" }</span>
})

