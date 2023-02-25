import React, { useState, useCallback, useDebugValue } from "react"

const useInput = () => {
    const [state, setState] = useState("")
    
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }, [])
    
    useDebugValue(`debug value input!!: ${state}`)
    
    return [state, onChange] as const
}


export const Input = () => { 
    const [text, onChangeText] = useInput()
    
    return <div>
        <input type="text" value={text} onChange={onChangeText} />
        <p>input: { text }</p>
    </div>
}








