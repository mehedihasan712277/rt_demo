

type TextProps = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'promary' | 'secondary'
    children: React.ReactNode,
    as?: React.ElementType
}
const Test = ({ size, color, children, as }: TextProps) => {
    const Component = as || "div"
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}

export default Test