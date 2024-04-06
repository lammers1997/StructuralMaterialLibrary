import { useSelector } from 'react-redux'
import ConcreteMaterialCard from './ConcreteMaterialCard'

const MaterialList = ({ displayMaterial }) => {

    //Get all materials from state
    const materials = useSelector(state => {
        return state.materials
    })

    //based on material clicked in sidemenu, display certain material
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
                    />
                )
            case 'steel':
                return;
            case 'timber':
                return;
        }
    }

    //TODO: Create own separate material card for concrete materials.
    return (
        <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '20px',
            paddingLeft: 20, paddingTop: 20, width: 1000
        }}>
            {materials.length === 0 ? ( 
                <div>No materials yet added to this section</div>
            ) : (
                materials
                    .slice() // Create a copy of the array to avoid mutating the original array
                    .sort((a, b) => a.name.localeCompare(b.name)) // Sort the materials by name
                    .map(material => //loop through each material and render it
                        <div key={material.id}>
                            {renderMaterialCard(material)}
                        </div>
                    )
            )}
        </div >
    )
}
export default MaterialList