import React from "react";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { decremented, incremented, set } from "../redux/slices/counter";

export const Counter = () => {
    const counter = useAppSelector((store) => store.counter);
    const dispatch = useDispatch();
    return (
        <div>
            Counter: {counter.value}
            <button onClick={() => dispatch(incremented())}>Increment</button>
            <button onClick={() => dispatch(decremented())}>Decrement</button>
            <button onClick={() => dispatch(set(10))}>10</button>
        </div>
    );
};
