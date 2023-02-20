import StateCounter from "./StateCounter"
import ReducerCounter from "./ReducerCounter"
import { FizzBuzz } from "./FizzBuzz"
import { FizzBuzz2 } from "./FizzBuzz2"
import { CallbackCounter } from "./CallbackCounter"
import { UseMemoSample } from "./UseMemoSample"
import { Clock } from "./353-useEffect"

const Hooks = () => {
    return (
        <div>
            <div>hooks container</div>
            <StateCounter initialValue={0} />
            <ReducerCounter initialValue={0} />
            <FizzBuzz />
            <FizzBuzz2 />
            <CallbackCounter />
            <UseMemoSample />
            <Clock />

        </div>
    )    
}

export default Hooks
