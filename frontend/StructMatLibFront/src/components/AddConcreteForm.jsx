import { useState } from "react"
import { useDispatch } from 'react-redux'
import { appendConcretes } from "../reducers/concreteReducer"
import concreteService from '../services/concretes'
import Notification from "./Notification"


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

    const [notificationMessage, setNotificationMessage] = useState(null)

    const dispatch = useDispatch()


    const handleSubmit = async (event) => {
        event.preventDefault();
        //Send data to backend with services :)


        const newConcreteMaterial = {
            name: newName,
            f_ck: {
                value: newf_ck,
                unit: 'MPa',
            },
            f_ckcube: {
                value: newf_ckcube,
                unit: 'MPa',
            },
            f_ctm: {
                value: newf_ctm,
                unit: 'MPa',
            },
            fctk05: {
                value: newfctk05,
                unit: 'MPa',
            },
            fctk95: {
                value: newfctk95,
                unit: 'MPa',
            },
            Ecm: {
                value: newEcm,
                unit: 'GPa',
            },
            epsilon_c1: {
                value: newepsilon_c1,
                unit: 'permille',
            },
            density: {
                value: newdensity,
                unit: 'kg/m^3',
            },
            thermal_conductivity: {
                value: newthermal_conductivity,
                unit: 'W/(m*K)',
            },
        }


        try {
            //Dispatching not currently necessary, since data is constantly retrieved from server :/
            // Might require some fix for this :P
            await concreteService.addNewMaterial(newConcreteMaterial)

            dispatch(appendConcretes(newConcreteMaterial))
            setNotificationMessage(`Material ${newName}, successfully added`)

        } catch (error) {
            window.alert(error.response.data.error);
        }



        setNewName('')
        setNewf_ck('')
        setNewf_ckcube('')
        setNewf_ctm('')
        setNewfctk05('')
        setNewfctk95('')
        setNewEcm('')
        setNewepsilon_c1('')
        setNewepsilon_c1('')
        setNewdensity('')
        setNewthermal_conductivity('')

        setTimeout(() => {
            setNotificationMessage(null)
        }, 6000)
    }


    return (
        <div>
            <Notification message={notificationMessage} />

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>name: <input
                        required
                        type="text"
                        value={newName}
                        onChange={event => setNewName(event.target.value)}

                    /></p>
                    <p>f<sub>ck</sub>:<input
                        required
                        type="number"
                        step='0.01'
                        value={newf_ck}
                        onChange={event => setNewf_ck(event.target.value)} />MPa</p>

                    <p>f<sub>ck,cube</sub>: <input
                        required
                        type="number"
                        step='0.01'
                        value={newf_ckcube}
                        onChange={event => setNewf_ckcube(event.target.value)} />MPa</p>
                    <p>f<sub>ctm</sub>:<input
                        required
                        type='number'
                        step='0.01'
                        value={newf_ctm}
                        onChange={event => setNewf_ctm(event.target.value)} />MPa</p>

                    <p>f<sub>ctk,0,5</sub>:<input
                        required
                        type='number'
                        step='0.01'
                        value={newfctk05}
                        onChange={event => setNewfctk05(event.target.value)} />MPa</p>

                    <p>f<sub>ctk,0,95</sub>:<input
                        required
                        type='number'
                        step='0.01'
                        value={newfctk95}
                        onChange={event => setNewfctk95(event.target.value)} />MPa</p>
                    <p>E<sub>cm</sub>:<input
                        required
                        type='number'
                        step='0.01'
                        value={newEcm}
                        onChange={event => setNewEcm(event.target.value)} />GPa</p>
                    <p>&#x3B5;<sub>c1</sub>:<input
                        required
                        type='number'
                        step='0.01'
                        value={newepsilon_c1}
                        onChange={event => setNewepsilon_c1(event.target.value)} />&#8240;</p>
                    <p>&#x3C1;:<input
                        required
                        type='number'
                        step='0.01'
                        value={newdensity}
                        onChange={event => setNewdensity(event.target.value)} />kg/m^3</p>
                    <p>&#x3BB;:<input
                        required
                        type='number'
                        step='0.01'
                        value={newthermal_conductivity}
                        onChange={event => setNewthermal_conductivity(event.target.value)} />W/(m*K)</p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>

    )
}
export default AddConcreteForm