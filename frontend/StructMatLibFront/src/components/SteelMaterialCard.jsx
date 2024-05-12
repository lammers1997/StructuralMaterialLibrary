import { useSelector } from "react-redux";
import '../styles/MatCard.css'


const SteelMaterialCard = ({
    name,
    f_yk,
    E,
    density,
    deleteThis,
    id
}) => {
    const user = useSelector((state) => state.user.user);
    
    const isAdmin = user && user.role === "admin";

    return (
        <div className='MatCard'>
            <div className='MatCard-header'>
                <div className='MatCard-headerText'>
                    <h2>{name}</h2>
                </div>
                {isAdmin && (
                    <div className='MatCard-delete'>
                        <button onClick={() => deleteThis(id)}>Delete</button>
                    </div>
                )}
            </div>
            <div className='steelContainer'>
                <div className='MatCard-text'>
                    <p>f<sub>yk</sub>: {f_yk.value} {f_yk.unit}</p>
                    <p>E<sub></sub>: {E.value} {E.unit}</p>
                    <p>&#x3C1;: {density.value} {density.unit}</p>
                </div>
            </div>
        </div>
    )
}
export default SteelMaterialCard