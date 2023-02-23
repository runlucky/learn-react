
import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const ImageUploader = () => {
    // DOMの参照用
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    // 選択されたファイルの保持
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string>("")
    
    const onClickInput = () => { 
        if (inputImageRef.current === null) return
        inputImageRef.current.click()
    }
    
    const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files = e.target.files
        if (files == null || files.length === 0) return
        fileRef.current = files[0]
    }
    
    const onClickUpload = async () => {
        if (fileRef.current == null) return
        
        // アップロード処理のかわり
        await sleep(3000)
        
        setMessage(`${fileRef.current.name}をアップロードしました`)
    }
    
    
    return <div>
        {/* ファイル選択用のinputは非表示にするしておく。その代わり自身の参照をinputImageRefに保持する */}
        <input ref={inputImageRef} type="file" accept="image/*" onChange={onSelectImage} style={{ visibility: "hidden" }} />
        
        {/* inputImageRefを使って、非表示のinputにアクセスする */}
        <p style={{ textDecoration: "underline" }} onClick={onClickInput}>画像を選択</p>
        
        
        {fileRef.current !== null && <p>選択中: {fileRef.current.name}</p>}
        
        
        <button onClick={onClickUpload}>アップロードする</button>
        <p>{message}</p>
    </div>
}