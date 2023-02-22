import React, { useContext } from 'react'

type User = {
    id: number
    name: string
}

// Userオブジェクトを渡すためのContextを定義・作成。初期値はnull
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
    // Parentから渡されたUserオブジェクトを取得
    // SwiftのEnvironmentObjectと同じ
    const user = useContext(UserContext)
    
    return user !== null
        ? <p>Hello, {user.name}(id: {user.id}) </p>
        : null
}

const Child = () => {
    const now = new Date()
    return <div>
        <p>I am Child</p>
        <p>Current: {now.toLocaleDateString()}</p>
        <GrandChild />
    </div>
}

export const Parent = () => { 
    const user: User = {
        id: 1,
        name: "We"
    }
    
    // 配下のViewにUserContextを使いUserオブジェクトを渡す
    return <UserContext.Provider value={user}>
        <div>
            <div>I am Parent</div>
            <Child />
            
        </div>
    </UserContext.Provider>
}