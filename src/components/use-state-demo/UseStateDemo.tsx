import './UseStateDemo.scss';
import {CounterExample} from "./counter-example/CounterExample.tsx";
import {ObjectExample} from "./object-example/ObjectExample.tsx";

export const UseStateDemo = () => {
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