import { useState } from "react"

const AddConcrete = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (

        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>name: <input /></p>
                <p>f<sub>ck</sub>:<input /></p>
                <p>f<sub>ck,cube</sub>: <input /></p>
                <p>f<sub>ctm</sub>:<input /></p>
                <p>f<sub>ctk,0,5</sub>:<input /></p>
                <p>f<sub>ctk,0,95</sub>:<input /></p>
                <p>E<sub>cm</sub>:<input /></p>
                <p>&#x3B5;<sub>c1</sub>:<input /></p>
                <p>&#x3C1;:<input /></p>
                <p>&#x3BB;:<input /></p>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default AddConcrete