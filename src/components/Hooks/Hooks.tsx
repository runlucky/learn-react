import StateCounter from "./StateCounter"
import ReducerCounter from "./ReducerCounter"
import FizzBuzz from "./FizzBuzz"
const Hooks = () => {
    return (
        <div>
            <div>hooks container</div>
            <StateCounter initialValue={0} />
            <ReducerCounter initialValue={0} />
            <FizzBuzz />
        </div>
    )    
}

export default Hooks
