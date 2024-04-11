import { useState } from "react"

const AddTimber = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (

        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>name: <input /></p>
                <p>f<sub>mk</sub>:<input /></p>
                <p>f<sub>t,0,k</sub>:<input /></p>
                <p>f<sub>t,90,k</sub>:<input /></p>
                <p>f<sub>c,0,k</sub>:<input /></p>
                <p>f<sub>c,90,k</sub>:<input /></p>
                <p>E<sub>0,mean</sub>:<input /></p>
                <p>E<sub>0,05</sub>:<input /></p>
                <p>E<sub>90,mean</sub>:<input /></p>
                <p>G<sub>mean</sub>:<input /></p>
                <p>G<sub>0,05</sub>:<input /></p>
                <p>&#x3C1;<sub>k</sub>:<input /></p>
                <p>&#x3C1;<sub>mean</sub>:<input /></p>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default AddTimber