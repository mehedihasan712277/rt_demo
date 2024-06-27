
import { useEffect, useRef, useState } from "react"

const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const intervalref = useRef<null | number>(null)

    const stopTimer = () => {
        if (intervalref.current) window.clearInterval(intervalref.current)
    }

    useEffect(() => {
        intervalref.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])
    return (
        <div>
            HookTimer - {timer}
            <button onClick={() => stopTimer()}>Stop timer</button>
        </div>
    )
}

export default MutableRef