type ContainerProps = {
    style: React.CSSProperties
}

const Container = (props: ContainerProps) => {
    return (
        <>
            <div style={props.style}>
                hello, this is style prop
            </div>
        </>
    )
}

export default Container