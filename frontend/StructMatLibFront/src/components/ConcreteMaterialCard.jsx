
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
        <div className='concreteMatCard' style={cardStyle}>
            <div style={headerStyle}>
                <div>
                    <h2 style={{transform:'translateY(-70%)'}}>{name}</h2>

                </div>
                <div style={buttonStyle}>
                    <button style={{transform:'translateY(20%)'}} onClick={() => deleteThis(id)}>Delete</button>
                </div>
            </div>
            <div className='concreteContainer'>
                <div className='dataset' style={textStyle}>
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