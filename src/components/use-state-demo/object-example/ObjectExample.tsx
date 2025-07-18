import {type ChangeEvent, type RefObject, useState} from "react";
import type {DemoObject} from "../../../models/demo-object.tsx";

type ObjectExampleProps = {
    demoObject: RefObject<DemoObject>;
}

export const ObjectExample = ({demoObject}: ObjectExampleProps) => {
    const useObjectUpdater = (initialValue: DemoObject) => {
        const [object, updateValue] = useState<DemoObject>(initialValue);

        const updateFirstName = (val: string) => updateValue(obj => ({
            ...obj,
            firstName: val
        }));

        const updateLastName = (val: string) => updateValue(obj => ({
            ...obj,
            lastName: val
        }));

        const updateAge = (val: number) => updateValue(obj => ({
            ...obj,
            age: val
        }));

        const reset = () => updateValue(initialValue);

        return {object, updateFirstName, updateLastName, updateAge, reset};
    }

    const {
        object,
        updateFirstName,
        updateLastName,
        updateAge,
        reset
    } = useObjectUpdater({ firstName: demoObject.current.firstName, lastName: demoObject.current.lastName, age: demoObject.current.age });
    const handleFirstNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateFirstName(event.target.value);
    }
    const handleLastNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateLastName(event.target.value);
    }
    const handleAgeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(event.target.value) || 0;
        updateAge(val);
    }

    return (
        <>
            <h4>Object Example:</h4>
            <span>This example utilizes a custom state hook, utilizing <code>useState</code> to:</span>
            <ul>
                <li>Control the object properties</li>
                <li>Update an object property</li>
                <li>Reset the object properties</li>
                <ul>
                    <li>This example sends a prop utilizing <code>useRef</code> for setting the initial values and for referencing on reset</li>
                </ul>
            </ul>
            <div className={'control-container'}>
                <span>Current Object Values:</span>
                <code>
                    {JSON.stringify({
                        firstName: object.firstName,
                        lastName: object.lastName,
                        age: object.age
                    }, null, 2)}
                </code>
                <div className={'form-group'}>
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName"
                           onChange={handleFirstNameInputChange}
                           className={'short-input'}
                           value={object.firstName} />
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName"
                           onChange={handleLastNameInputChange}
                           className={'short-input'}
                           value={object.lastName} />
                    <label htmlFor="age">Age:</label>
                    <input id="age"
                           onChange={handleAgeInputChange}
                           className={'short-input'}
                           value={object.age}
                           type='number' />
                </div>
                <button onClick={reset}>Reset Object</button>
            </div>
        </>
    );
}