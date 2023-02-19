import React, { useMemo, useState } from "react"


export const UseMemoSample = () => { 
    
    const [text, setText] = useState("")
    const [items, setItems] = useState<string[]>([])
    
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setText(e.target.value)
    }
    
    const onClick = () => {
        setItems((prev) => [...prev, text])
        setText("")
    }
    
    // inputに入力した場合でも再描画処理が走る
    const nonMemoTotal = items.reduce((sub, item) => {
        console.log("non memo再計算")
        return sub + item.length
    }, 0)
    
    // memo化。引数の[items]に変更があった場合のみ再描画される
    const memoTotal = useMemo(() => {
        console.log("memo再計算")
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])
    
    return <div>
        <p>Use Memo Sample</p>
        <div>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClick}>Add</button>
        </div>
        <div>
            <p>Total: {nonMemoTotal}</p>
            <p>Total(memo): {memoTotal}</p>
        </div>
        <div>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    </div>
    
}