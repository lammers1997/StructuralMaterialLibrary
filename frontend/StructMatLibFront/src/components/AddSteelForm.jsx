import { useState } from "react"

const AddSteelForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (

        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>name: <input /></p>
                <p>f<sub>yk</sub>:<input /></p>
                <p>E<sub></sub>:<input /></p>
                <p>&#x3C1;<sub>k</sub>:<input /></p>

            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default AddSteelForm