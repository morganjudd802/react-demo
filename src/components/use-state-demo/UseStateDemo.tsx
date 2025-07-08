import './UseStateDemo.scss';
import {CounterExample} from "./counter-example/CounterExample.tsx";
import {ObjectExample} from "./object-example/ObjectExample.tsx";
import {type RefObject, useRef} from "react";
import type {DemoObject} from "../../models/demo-object.tsx";

export const UseStateDemo = () => {

    const demoObject: RefObject<DemoObject> = useRef({firstName: 'First', lastName: 'Last', age: 30});

    return (
        <>
            <div className={'state-example-container'}>
                <CounterExample></CounterExample>
            </div>
            <div className={'state-example-container'}>
                <ObjectExample demoObject={demoObject}></ObjectExample>
            </div>
        </>
    );
}