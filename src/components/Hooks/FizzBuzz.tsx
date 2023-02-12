import { useState, memo } from "react"


const FizzBuzz = () => {
    const [count, setCount] = useState(1)
    return(
        <div>
            <p>FizzBuzzCount: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>
                <Fizz isFizz={ count % 3 === 0} />
                <Buzz isBuzz={ count % 5 === 0} />
            </p>
        </div>
    )
}

// isFizzに変更がなくても、親の再描画によりFizzも再描画される
const Fizz = (props: { isFizz: boolean}) => {
    console.log(`Fizz再描画: ${props.isFizz}`)
    return <span>{props.isFizz ? "Fizz" : "-"}</span>
    
}

// memoでラップすることにより不要な再描画を抑制する
const Buzz = memo<{ isBuzz: boolean }>((props) => {
    console.log(`Buzz再描画: ${props.isBuzz}`)
    return <span>{props.isBuzz ? "Buzz" : "-"}</span>
})

export default FizzBuzz