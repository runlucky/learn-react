import StateCounter from "./StateCounter"
import ReducerCounter from "./ReducerCounter"

const Hooks = () => {
    return (
        <div>
            <div>hooks container</div>
            <StateCounter initialValue={0} />
            <ReducerCounter initialValue={0} />
        </div>
    )    
}

export default Hooks
