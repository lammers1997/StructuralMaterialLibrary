import { useState } from "react"
import { useDispatch } from 'react-redux'
import { appendMaterial } from "../reducers/materialReducer"
import concreteService from '../services/concretes'
import Notification from "./Notification"


const AddConcreteForm = (setMessage) => {

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


    const handleSubmit = (event) => {
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
        dispatch(appendMaterial(newConcreteMaterial))

        concreteService.addNewMaterial(newConcreteMaterial)
        setNotificationMessage(`Material ${newName}, successfully added`)

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
                        type="text"
                        value={newName}
                        onChange={event => setNewName(event.target.value)}
                    /></p>
                    <p>f<sub>ck</sub>:<input
                        type="number"
                        step='0.01'
                        value={newf_ck}
                        onChange={event => setNewf_ck(event.target.value)} /></p>

                    <p>f<sub>ck,cube</sub>: <input
                        type="number"
                        step='0.01'
                        value={newf_ckcube}
                        onChange={event => setNewf_ckcube(event.target.value)} /></p>
                    <p>f<sub>ctm</sub>:<input
                        type='number'
                        step='0.01'
                        value={newf_ctm}
                        onChange={event => setNewf_ctm(event.target.value)} /></p>

                    <p>f<sub>ctk,0,5</sub>:<input
                        type='number'
                        step='0.01'
                        value={newfctk05}
                        onChange={event => setNewfctk05(event.target.value)} /></p>

                    <p>f<sub>ctk,0,95</sub>:<input
                        type='number'
                        step='0.01'
                        value={newfctk95}
                        onChange={event => setNewfctk95(event.target.value)} /></p>
                    <p>E<sub>cm</sub>:<input
                        type='number'
                        step='0.01'
                        value={newEcm}
                        onChange={event => setNewEcm(event.target.value)} /></p>
                    <p>&#x3B5;<sub>c1</sub>:<input
                        type='number'
                        step='0.01'
                        value={newepsilon_c1}
                        onChange={event => setNewepsilon_c1(event.target.value)} /></p>
                    <p>&#x3C1;:<input
                        type='number'
                        step='0.01'
                        value={newdensity}
                        onChange={event => setNewdensity(event.target.value)} /></p>
                    <p>&#x3BB;:<input
                        type='number'
                        step='0.01'
                        value={newthermal_conductivity}
                        onChange={event => setNewthermal_conductivity(event.target.value)} /></p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>

    )
}
export default AddConcreteForm