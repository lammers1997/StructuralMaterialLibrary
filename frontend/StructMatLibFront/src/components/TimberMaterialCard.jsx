
const TimberMaterialCard = ({
    name,
    f_mk,
    f_t0k,
    f_t90k,
    f_c0k,
    f_c90k,
    E_0mean,
    E_005,
    E_90mean,
    G_mean,
    G_005,
    density_k,
    density_mean,
    thermal_conductivity,
    deleteThis,
    id
}) => {

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
        height:40,
        borderBottom: '1px solid #000000'

    }
    const buttonStyle = {
        marginLeft:120,
    }

    return (
        <div className='timberMatCard' style={cardStyle}>
            <div style={headerStyle}>
                <div>
                    <h2 style={{transform:'translateY(-70%)'}}>{name}</h2>

                </div>
                <div style={buttonStyle}>
                    <button style={{transform:'translateY(20%)'}} onClick={() => deleteThis(id)}>Delete</button>
                </div>
            </div>
            <div className='timberContainer'>
                <div className='dataset' style={textStyle}>
                    <p>f<sub>mk</sub>: {f_mk.value} {f_mk.unit}</p>
                    <p>f<sub>t,0,k</sub>: {f_t0k.value} {f_t0k.unit}</p>
                    <p>f<sub>t,90,k</sub>: {f_t90k.value} {f_t90k.unit}</p>
                    <p>f<sub>c,0,k</sub>: {f_c0k.value} {f_c0k.unit}</p>
                    <p>f<sub>c,90,k</sub>: {f_c90k.value} {f_c90k.unit}</p>
                    <p>E<sub>0,mean</sub>: {E_0mean.value} {E_0mean.unit}</p>
                    <p>E<sub>0,05</sub>: {E_005.value} {E_005.unit}</p>
                    <p>E<sub>90,mean</sub>: {E_90mean.value} {E_90mean.unit}</p>
                    <p>G<sub>mean</sub>: {G_mean.value} {G_mean.unit}</p>
                    <p>G<sub>0,05</sub>: {G_005.value} {G_005.unit}</p>
                    <p>&#x3C1;<sub>k</sub>: {density_k.value} {density_k.unit}</p>
                    <p>&#x3C1;<sub>mean</sub>: {density_mean.value} {density_mean.unit}</p>
                    <p>&#x3BB;: {thermal_conductivity.value} {thermal_conductivity.unit}</p>
                </div>
            </div>
        </div>
    )
}
export default TimberMaterialCard