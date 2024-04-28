import { useSelector } from "react-redux";

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
    
    const cardStyle = {
        width: '250px',
        padding: '5px',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: 'grey',
        border: '1px solid #000000',

    }
    const textStyle = {
        fontSize: '12px',
        lineHeight: '1.5',
        columnCount: 2,
        columnGap: '10px',
    }
    const headerStyle = {
        display: 'flex',
        height: 40,
        borderBottom: '1px solid #000000'

    }
    const buttonStyle = {
        marginLeft: 120,
    }

    return (
        <div className='steelMatCard' style={cardStyle}>
            <div style={headerStyle}>
                <div>
                    <h2 style={{ transform: 'translateY(-70%)' }}>{name}</h2>

                </div>
                {isAdmin && (
                    <div style={buttonStyle}>
                        <button style={{transform:'translateY(20%)'}} onClick={() => deleteThis(id)}>Delete</button>
                    </div>
                )}
            </div>
            <div className='steelContainer'>
                <div className='dataset' style={textStyle}>
                    <p>f<sub>yk</sub>: {f_yk.value} {f_yk.unit}</p>
                    <p>E<sub></sub>: {E.value} {E.unit}</p>
                    <p>&#x3C1;: {density.value} {density.unit}</p>
                </div>
            </div>
        </div>
    )
}
export default SteelMaterialCard