import { useSelector } from 'react-redux'
import ConcreteMaterialCard from './ConcreteMaterialCard'

const ConcreteList = () => {

    const concretes = useSelector(state => {
        return state.concretes
    })

//TODO: Create own separate material card for concrete materials.
return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px',position:'fixed', left:175 }}>
        {concretes
        .slice() // Create a copy of the array to avoid mutating the original array
        .sort((a, b) => a.name.localeCompare(b.name)) // Sort the materials by name
        .map(concretes =>
            <div key={concretes.id}>
                <ConcreteMaterialCard
                    name={concretes.name}
                    f_ck={concretes.f_ck}
                    f_ckcube={concretes.f_ckcube}
                    f_ctm={concretes.f_ctm}
                    fctk05={concretes.fctk05}
                    fctk95={concretes.fctk95}
                    Ecm={concretes.Ecm}
                    epsilon_c1={concretes.epsilon_c1}
                    density={concretes.density}
                    thermal_conductivity={concretes.thermal_conductivity}
                />
            </div>
        )}
    </div>
)
}
export default ConcreteList