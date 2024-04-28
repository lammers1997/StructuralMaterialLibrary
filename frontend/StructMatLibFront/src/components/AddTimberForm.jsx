import { useState } from "react"
import { useDispatch } from 'react-redux'
import { appendTimber } from "../reducers/timberReducer"
import timberService from '../services/timbers'
import Notification from "./Notification"


const AddTimberForm = () => {

    const [newName, setNewName] = useState('')

    const [newf_mk, setNewf_mk] = useState('')



    const [newf_t0k, setNewf_t0k] = useState('')
    const [newf_t90k, setNewf_t90k] = useState('')

    const [newf_c0k, setNewf_c0k] = useState('')
    const [newf_c90k, setNewf_c90k] = useState('')

    const [newE_0mean, setNewE_0mean] = useState('')
    const [newE_005, setNewE_005] = useState('')
    const [newE_90mean, setNewE_90mean] = useState('')

    const [newG_mean, setNewG_mean] = useState('')
    const [newG_005, setNewG_005] = useState('')


    const [newdensity_k, setNewdensity_k] = useState('')
    const [newdensity_mean, setNewdensity_mean] = useState('')

    const [newthermal_conductivity, setNewthermal_conductivity] = useState('')

    const [notificationMessage, setNotificationMessage] = useState(null)


    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        event.preventDefault();
        const newTimberMaterial = {
            name: newName,
            f_mk: {
                value: newf_mk,
                unit: 'MPa',
            },
            f_t0k: {
                value: newf_t0k,
                unit: 'MPa',
            },
            f_t90k: {
                value: newf_t90k,
                unit: 'MPa',
            },
            f_c0k: {
                value: newf_c0k,
                unit: 'MPa',
            },
            f_c90k: {
                value: newf_c90k,
                unit: 'MPa',
            },
            E_0mean: {
                value: newE_0mean,
                unit: 'MPa',
            },
            E_005: {
                value: newE_005,
                unit: 'MPa',
            },
            E_90mean: {
                value: newE_90mean,
                unit: 'MPa',
            },
            G_mean: {
                value: newG_mean,
                unit: 'MPa',
            },
            G_005: {
                value: newG_005,
                unit: 'MPa',
            },
            density_k: {
                value: newdensity_k,
                unit: 'kg/m^3',
            },
            density_mean: {
                value: newdensity_mean,
                unit: 'kg/m^3',
            },
            thermal_conductivity: {
                value: newthermal_conductivity,
                unit: 'W/(m*K)',
            },
        }
        //Dispatching not currently necessary, since data is constantly retrieved from server :/
        // Might require some fix for this :P
        // dispatch(appendMaterial(newTimberMaterial))

        timberService.addNewMaterial(newTimberMaterial)
        setNotificationMessage(`Material ${newName}, successfully added`)

        setNewName('')
        setNewf_mk('')
        setNewf_t0k('')
        setNewf_t90k('')
        setNewf_c0k('')
        setNewf_c90k('')
        setNewE_0mean('')
        setNewE_005('')
        setNewE_90mean('')
        setNewG_mean('')
        setNewG_005('')
        setNewdensity_k('')
        setNewdensity_mean('')
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
                        onChange={event => setNewName(event.target.value)} /></p>
                    <p>f<sub>mk</sub>:<input
                        type="number"
                        step='0.01'
                        value={newf_mk}
                        onChange={event => setNewf_mk(event.target.value)} /> MPa</p>
                    <p>f<sub>t,0,k</sub>:<input
                        type="number"
                        step='0.01'
                        value={newf_t0k}
                        onChange={event => setNewf_t0k(event.target.value)} />MPa</p>
                    <p>f<sub>t,90,k</sub>:<input
                        type="number"
                        step='0.01'
                        value={newf_t90k}
                        onChange={event => setNewf_t90k(event.target.value)} />MPa</p>
                    <p>f<sub>c,0,k</sub>:<input
                        type="number"
                        step='0.01'
                        value={newf_c0k}
                        onChange={event => setNewf_c0k(event.target.value)} />MPa</p>
                    <p>f<sub>c,90,k</sub>:<input
                        type="number"
                        step='0.01'
                        value={newf_c90k}
                        onChange={event => setNewf_c90k(event.target.value)} />MPa</p>
                    <p>E<sub>0,mean</sub>:<input
                        type="number"
                        step='0.01'
                        value={newE_0mean}
                        onChange={event => setNewE_0mean(event.target.value)} />MPa</p>
                    <p>E<sub>0,05</sub>:<input
                        type="number"
                        step='0.01'
                        value={newE_005}
                        onChange={event => setNewE_005(event.target.value)} />MPa</p>
                    <p>E<sub>90,mean</sub>:<input
                        type="number"
                        step='0.01'
                        value={newE_90mean}
                        onChange={event => setNewE_90mean(event.target.value)} />GPa</p>
                    <p>G<sub>mean</sub>:<input
                        type="number"
                        step='0.01'
                        value={newG_mean}
                        onChange={event => setNewG_mean(event.target.value)} />GPa</p>
                    <p>G<sub>0,05</sub>:<input
                        type="number"
                        step='0.01'
                        value={newG_005}
                        onChange={event => setNewG_005(event.target.value)} />GPa</p>
                    <p>&#x3C1;<sub>k</sub>:<input
                        type="number"
                        step='0.01'
                        value={newdensity_k}
                        onChange={event => setNewdensity_k(event.target.value)} />kg/m^3</p>
                    <p>&#x3C1;<sub>mean</sub>:<input
                        type="number"
                        step='0.01'
                        value={newdensity_mean}
                        onChange={event => setNewdensity_mean(event.target.value)} />kg/m^3</p>
                    <p>&#x3BB;:<input
                        type="number"
                        step='0.01'
                        value={newthermal_conductivity}
                        onChange={event => setNewthermal_conductivity(event.target.value)} />W/(m*k)</p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form >
        </div>
    )
}
export default AddTimberForm