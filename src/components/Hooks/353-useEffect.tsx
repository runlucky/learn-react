import React, { useEffect, useState } from "react"

enum Locale {
    ja = "ja-JP",
    en = "en-US"
}

const getLocale = (text: string) => {
    switch (text) {
        case Locale.en: return Locale.en
        case Locale.ja: return Locale.ja
        default: return Locale.en
    }
}

// useEffectは描画後に実行される
export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.en)
    
    // 1秒ごとに現在時刻を更新
    useEffect(() => { 
        console.log("タイマー起動")
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, 1000)
        
        return () => {
            // コンポーネントがアンマウントされるときにtimerを開放する
            clearInterval(timer)
        }
    }, []) // []を指定することで初回のみ実行される
    
    // 描画関数中にlocalStorageを読み込むと、描画遅延するため、useEffectを使う
    // ただし、useEffectは描画後に実行されるため、初期値のenが表示される
    // そのためjaに設定してると、一瞬enが表示される
    // useLayoutEffectを使うことで描画前に実行されるため、上記問題を回避できる
    // ただし、useLayoutEffectは同期的に実行され、描画をブロックするため、重い処理をする場合は注意する
    useEffect(() => {
        const _locale = localStorage.getItem("Locale")
        console.log(`localStorageからLocaleを取得: ${_locale}`)
        if (_locale !== null) {
            setLocale(getLocale(_locale))
        }
    }, [])
    
    useEffect(() => {
        console.log(`localeをlocalStorageに保存します: ${locale}`)
        localStorage.setItem("Locale", locale)
    }, [locale])
    
    return <div>
        <p>
            <span id="current-time-label">time:</span>
            <span>{timestamp.toLocaleString(locale)}</span>
            <select value={locale} onChange={(e) => setLocale(getLocale(e.target.value))}>
                <option value={Locale.ja}>ja</option>
                <option value={Locale.en}>en</option>
            </select>
        </p>
    </div>
}