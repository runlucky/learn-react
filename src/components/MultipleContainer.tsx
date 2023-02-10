import React from "react"

type Props = {
    title: string
    children: React.ReactNode
}

const MultipleContainer = (props: Props): JSX.Element => {
    const {title, children} = props

    const style = {
        background: "blue"
    }

    return(
    <div style={style}>
        <span>I am Multiple Container: {title}</span>
        {children}
    </div>
    )
}

export default MultipleContainer