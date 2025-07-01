import './state-demo.scss';
import {CounterExample} from "./counter-example/counter-example.tsx";
import {ObjectExample} from "./object-example/object-example.tsx";

export const StateDemo = () => {
    return (
        <>
            <div className={'state-example-container'}>
                <CounterExample></CounterExample>
            </div>
            <div className={'state-example-container'}>
                <ObjectExample></ObjectExample>
            </div>
        </>
    );
}