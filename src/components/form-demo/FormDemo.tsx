import './FormDemo.scss';

export const FormDemo = () => {

    function submitForm(formData: FormData) {
        const query = formData.get("query");
        alert(`You searched for: ${query}`);
    }

    return (
        <>
            <h4>Form Example:</h4>
            <span>This example uses the action prop on a form to run a function which:</span>
            <ul>
                <li>Reads the form data expressed via name on the form field</li>
            </ul>


                <form action={submitForm}>
                    <div className={'form-container'}>
                        <input name="query" />
                        <button type="submit">Search</button>
                    </div>
                </form>
        </>
    );
}