import './state-demo.component.scss';
import {CounterExample} from "./counter-example/counter-example.component.tsx";
import {ObjectExample} from "./object-example/object-example.component.tsx";

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