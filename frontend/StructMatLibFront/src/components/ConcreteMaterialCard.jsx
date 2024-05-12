import { useSelector } from "react-redux";
import '../styles/MatCard.css'

const ConcreteMaterialCard = ({
    name,
    f_ck,
    f_ckcube,
    f_ctm,
    fctk05,
    fctk95,
    Ecm,
    epsilon_c1,
    density,
    thermal_conductivity,
    deleteThis,
    id
}) => {
    const user = useSelector((state) => state.user.user);

    const isAdmin = user && user.role === "admin";

    return (
        <div className='MatCard'>
            <div className='MatCard-header'>
                <div>
                    <h2 className='MatCard-headerText'>{name}</h2>

                </div>
                {isAdmin && (
                    <div className='MatCard-delete'>
                        <button onClick={() => deleteThis(id)}>Delete</button>
                    </div>
                )}
            </div>
            <div className='concreteContainer'>
                <div className='MatCard-text' >
                    <p>f<sub>ck</sub>: {f_ck.value} {f_ck.unit}</p>
                    <p>f<sub>ck,cube</sub>: {f_ckcube.value} {f_ckcube.unit}</p>
                    <p>f<sub>ctm</sub>: {f_ctm.value} {f_ctm.unit}</p>
                    <p>f<sub>ctk,0,5</sub>: {fctk05.value} {fctk05.unit}</p>
                    <p>f<sub>ctk,0,95</sub>: {fctk95.value} {fctk95.unit}</p>
                    <p>E<sub>cm</sub>: {Ecm.value} {Ecm.unit}</p>
                    <p>&#x3B5;<sub>c1</sub>: {epsilon_c1.value} {epsilon_c1.unit}</p>
                    <p>&#x3C1;: {density.value} {density.unit}</p>
                    <p>&#x3BB;: {thermal_conductivity.value} {thermal_conductivity.unit}</p>
                </div>
            </div>
        </div>
    )
}
export default ConcreteMaterialCard