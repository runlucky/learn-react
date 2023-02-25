import StateCounter from "./StateCounter"
import ReducerCounter from "./ReducerCounter"
import { FizzBuzz } from "./FizzBuzz"
import { FizzBuzz2 } from "./FizzBuzz2"
import { CallbackCounter } from "./CallbackCounter"
import { UseMemoSample } from "./UseMemoSample"
import { Clock } from "./353-useEffect"
import { Parent } from "./354-useContext"
import { ImageUploader, ImageUploaderEx } from "./355-useRef"
import { ImperativeParent } from "./355-useImperativeHandle"
import { Input } from "./356−useInput"

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
            <Parent />
            <ImageUploader />
            <ImageUploaderEx />
            <ImperativeParent />
            <Input />
        </div>
    )    
}

export default Hooks
