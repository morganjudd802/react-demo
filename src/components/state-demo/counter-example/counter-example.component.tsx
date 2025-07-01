import {type ChangeEvent, useState} from "react";

export const CounterExample = () => {
    const IncrementalCounter = (initialValue: number = 0) => {
        const [count, setCount] = useState<number>(initialValue);

        const increment = () => setCount(val => val + 1);
        const decrement = () => setCount(val => val - 1);
        const reset = () => setCount(initialValue);
        const setValue = (val: number) => setCount(val);

        return {count, increment, decrement, reset, setValue};
    }

    const { count, increment, decrement, reset, setValue } = IncrementalCounter(0);
    const handleCounterInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(event.target.value) || 0;
        setValue(val);
    }

    return (
        <>
            <h4>Counter Example:</h4>
            <span>This example utilizes a custom state hook, utilizing <code>useState</code> to:</span>
            <ul>
                <li>Control the count value</li>
                <li>Decrement the count value</li>
                <li>Increment the count value</li>
                <li>Reset the count value</li>
                <li>Set the count value via the input</li>
            </ul>
            <div className={'control-container'}>
                <span>Current Count: {count}</span>
                <div className={'button-group'}>
                    <button className="left-button" onClick={decrement}>-</button>
                    <input onChange={handleCounterInputChange} className={'short-input'} value={count} type='number' />
                    <button className="right-button" onClick={increment}>+</button>
                </div>
                <button onClick={reset}>Reset Counter</button>
            </div>
        </>
    );
}