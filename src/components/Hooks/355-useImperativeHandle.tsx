import { useState, useRef, forwardRef, useImperativeHandle } from "react"


type OnMessage = {
    showMessage: () => void
}

const Child = forwardRef((props, ref) => {
    const [message, setMessage] = useState<string | null>(null)
    
    const onMessage: OnMessage = {
        showMessage: () => {
            const now = new Date()
            setMessage(`現在時刻は${now.toLocaleTimeString()}です`)
        }
    }
    
    useImperativeHandle(ref, () => onMessage)
    
    return <div>
        { message !== null && <p>{message}</p> }
    </div>
 })


export const ImperativeParent = () => { 
    const childRef = useRef<OnMessage>(null)
    
    const onClick = () => {
        if (childRef.current === null) return
        childRef.current.showMessage()
    }
    
    return <div>
        <button onClick={onClick}>Show Message</button>
        <Child ref={childRef} />
    </div>
}