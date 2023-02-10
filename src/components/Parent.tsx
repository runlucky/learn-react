const Container = (props: {title: string; children: React.ReactElement}) => {
    const { title, children } = props

    const style = {
        background: "red"
    }

    return (
    <div style={style}>
        <span>{title}</span>
        {children}
    </div>
    )
}

const Parent = () => {
    return (
        <Container title="Hello">
            <p>I am child.</p>
        </Container>
    )
}

export default Parent
