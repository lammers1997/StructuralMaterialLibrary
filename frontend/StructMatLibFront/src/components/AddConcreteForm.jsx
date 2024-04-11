import { useState } from "react"

const AddConcreteForm = () => {

    const [newName, setNewName] = useState('')
    const [newf_ck, setNewf_ck] = useState('')
    const [newf_ckcube, setNewf_ckcube] = useState('')
    const [newf_ctm, setNewf_ctm] = useState('')
    const [newfctk05, setNewfctk05] = useState('')
    const [newfctk95, setNewfctk95] = useState('')
    const [newEcm, setNewEcm] = useState('')
    const [newepsilon_c1, setNewepsilon_c1] = useState('')
    const [newdensity, setNewdensity] = useState('')
    const [newthermal_conductivity, setNewthermal_conductivity] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        //Send data to backend with services :)
        setNewName('')
        setNewf_ck('')
    }


    return (

        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>name: <input
                    type="text"
                    value={newName}
                    onChange={event => setNewName(event.target.value)}
                /></p>
                <p>f<sub>ck</sub>:<input
                    type="number"
                    step='0.01'
                    value={newf_ck}
                    onChange={event => setNewf_ck(event.target.value)}

                /></p>
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
export default AddConcreteForm