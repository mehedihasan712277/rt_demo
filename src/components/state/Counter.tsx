import { useReducer } from "react";

type StateProp = {
    count: number;
}
type UpdateAction = {
    type: "increment" | "decrement"
    payload: number
}
type ResetAction = {
    type: "reset"
}
type Action = UpdateAction | ResetAction

const initialState = { count: 0 };

const reducer = (state: StateProp, action: Action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload }
        case "decrement":
            return { count: state.count - action.payload }
        case "reset":
            return initialState
        default:
            return state

    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {state.count}
            <div>
                <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment</button>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
                <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter