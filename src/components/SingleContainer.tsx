const SingleContainer = (props: {title: string; children: React.ReactElement}) => {
    const { title, children } = props

    const style = {
        background: "red"
    }

    return (
    <div style={style}>
        <span>I am Single Container: {title}</span>
        {children}
    </div>
    )
}

export default SingleContainer
