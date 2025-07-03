import { useEffect, useState } from "react";

export const UseEffectDemo = () => {
    const [message, setMessage] = useState<string>('Initial message');
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // Effect 1: Runs once on mount (empty dependency array)
    useEffect(() => {
        console.log('Effect 1: Component mounted');
        setMessage('Component has mounted!');

        return () => {
            console.log('Effect 1: Component will unmount');
        };
    }, []);

    // Effect 2: Runs on every count change
    useEffect(() => {
        console.log(`Effect 2: Count changed to ${count}`);
        setMessage(`Counter was updated to: ${count}`);
    }, [count]);

    // Effect 3: Runs on every render (no dependency array)
    useEffect(() => {
        console.log('Effect 3: This runs on every render');
    });

    // Effect 4: Runs when name changes
    useEffect(() => {
        if (name) {
            console.log(`Effect 4: Name changed to ${name}`);
            setMessage(`Hello, ${name}!`);
        }
    }, [name]);

    return (
        <>
            <h4>Use Effect Example:</h4>
            <span>This example utilizes three <code>useState</code> hooks and four <code>useEffect</code> hooks to:</span>
            <ul>
                <li>Set a message, set a count, and set a name</li>
                <li>Run a side effect on mount / unmount of the component</li>
                <li>Run a side effect on every count change</li>
                <li>Run a side effect on every name change</li>
                <li>Run a side effect on every render</li>
            </ul>
            <span>See console for effect calls</span>

            <p>Current Message: {message}</p>

            <div>
                <button onClick={() => setCount(c => c + 1)}>
                    Increment Count: {count}
                </button>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
        </>
    );
};
