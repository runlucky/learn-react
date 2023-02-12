import StateCounter from "./StateCounter"
import ReducerCounter from "./ReducerCounter"
import { FizzBuzz } from "./FizzBuzz"
import { FizzBuzz2 } from "./FizzBuzz2"
import { CallbackCounter } from "./CallbackCounter"

const Hooks = () => {
    return (
        <div>
            <div>hooks container</div>
            <StateCounter initialValue={0} />
            <ReducerCounter initialValue={0} />
            <FizzBuzz />
            <FizzBuzz2 />
            <CallbackCounter />

        </div>
    )    
}

export default Hooks
