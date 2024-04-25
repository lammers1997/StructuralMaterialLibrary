import { useDispatch, useSelector } from 'react-redux'
import ConcreteMaterialCard from './ConcreteMaterialCard'
import concreteService from '../services/concretes'
import steelService from '../services/steels'

import { useState } from 'react'
import { deleteConcrete } from '../reducers/concreteReducer'
import { deleteSteel } from '../reducers/steelReducer'
import Notification from './Notification'
import SteelMaterialCard from './SteelMaterialCard'

const MaterialList = ({ displayMaterial }) => {

    const [notificationMessage, setNotificationMessage] = useState(null)

    const dispatch = useDispatch()


    //Get all materials from state
    const concretes = useSelector(state => {
        return state.concrete
    })
    const steels = useSelector(state => {
        return state.steel
    })
    const timbers = useSelector(state => {
        return state.timber
    })


    //ToDo: clicking delete shows the alert window twice. And window must be updated to make the deleted material disappear.

    const deleteConcrete = (id) => {
        console.log('DELETING', id)
        const material = concretes.find(m => m.id === id)
        const ifDelete = window.confirm(`Delete ${material.name}?`)

        if (!ifDelete) {
            console.log('Delete cancelled')
            return
        } else {
            concreteService
                .deleteMaterial(id)
                .then(status => {
                    console.log(`Status: ${status}`)
                    concretes.filter(material => material.id !== id)
                    setNotificationMessage(
                        `${material.name} deleted successfully.`
                    )
                    dispatch(deleteConcrete(id))
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 6000)
                })
                .catch(error => {
                    setNotificationMessage(
                        `Information of ${material.name} has already been removed from server`
                    )
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 6000)
                })
        }
    }

    //ToDo: clicking delete shows the alert window twice. And window must be updated to make the deleted material disappear.

    const deleteSteel = (id) => {
        console.log('DELETING', id)
        const material = steels.find(m => m.id === id)
        const ifDelete = window.confirm(`Delete ${material.name}?`)

        if (!ifDelete) {
            console.log('Delete cancelled')
            return
        } else {
            steelService
                .deleteMaterial(id)
                .then(status => {
                    console.log(`Status: ${status}`)
                    steels.filter(material => material.id !== id)
                    setNotificationMessage(
                        `${material.name} deleted successfully.`
                    )
                    dispatch(deleteSteel(id))
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 6000)
                })
                .catch(error => {
                    setNotificationMessage(
                        `Information of ${material.name} has already been removed from server`
                    )
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 6000)
                })
        }
    }

    // based on material clicked in sidemenu, display certain material
    const renderMaterialCard = (material) => {
        switch (displayMaterial) {
            case 'concrete':
                return (
                    <ConcreteMaterialCard
                        name={material.name}
                        f_ck={material.f_ck}
                        f_ckcube={material.f_ckcube}
                        f_ctm={material.f_ctm}
                        fctk05={material.fctk05}
                        fctk95={material.fctk95}
                        Ecm={material.Ecm}
                        epsilon_c1={material.epsilon_c1}
                        density={material.density}
                        thermal_conductivity={material.thermal_conductivity}
                        deleteThis={deleteConcrete}
                        id={material.id}
                    />
                )
            case 'steel':
                return (
                    <SteelMaterialCard
                        name={material.name}
                        f_yk={material.f_yk}
                        E={material.E}
                        density={material.density}
                        deleteThis={deleteSteel}
                        id={material.id}
                    />
                )
            case 'timber':
                return;
        }
    }

    //TODO: Create own separate material card for concrete materials.
    return (
        <div>
            <Notification message={notificationMessage} />
            <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '20px',
                paddingLeft: 20, paddingTop: 20, width: 1000
            }}>

                {displayMaterial === 'concrete' && concretes.length === 0 ? (
                    <div>No concrete materials yet added</div>
                ) : displayMaterial === 'steel' && steels.length === 0 ? (
                    <div>No steel materials yet added</div>
                ) : displayMaterial === 'timber' && timbers.length === 0 ? (
                    <div>No timber materials yet added</div>
                ) : (
                    displayMaterial === 'concrete' ? (
                        concretes.map(material => (
                            <div key={material.id}>
                                {renderMaterialCard(material)}
                            </div>
                        ))
                    ) : displayMaterial === 'steel' ? (
                        steels.map(material => (
                            <div key={material.id}>
                                {renderMaterialCard(material)}
                            </div>
                        ))
                    ) : null
                )}

                {/* {concretes.length === 0 ? (
                    <div>No materials yet added to this section</div>
                ) : (
                    concretes
                        .slice() // Create a copy of the array to avoid mutating the original array
                        .sort((a, b) => a.name.localeCompare(b.name)) // Sort the materials by name
                        .map(material => //loop through each material and render it
                            <div key={material.id}>
                                {renderMaterialCard(material)}
                            </div>
                        )
                )} */}


            </div >
        </div>
    )
}
export default MaterialList