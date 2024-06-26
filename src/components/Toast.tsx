type Horizontal = 'left' | 'center' | 'right'
type Vertical = 'top' | 'center' | 'bottom'

type ToastPositonProps = {
    position: Exclude<`${Horizontal}-${Vertical}`, 'center-center'> | 'center'
}
const Toast = ({ position }: ToastPositonProps) => {
    return (
        <div>Toast notification - {position}</div>
    )
}

export default Toast