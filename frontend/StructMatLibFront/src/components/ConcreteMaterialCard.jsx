
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
    thermal_conductivity
}) => {

    const cardStyle = {
        width: '250px',
        height: '200px',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: 'grey',
        border: '1px solid #000000',

    }
    const textStyle = {
        fontSize: '12px', // Adjust the font size as needed
        lineHeight: '1.5', // Adjust the line height as needed
        columnCount: 2, // Set the number of columns
        columnGap: '10px', // Adjust the gap between columns
    }
    const headerStyle = {
        textAlign: 'center',
        alignSelf: 'flex-start', // Align the header to the top
    }

    return (
        <div className='concreteMatCard' style={cardStyle}>
            <h2 style={headerStyle}>{name}</h2>
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


                {/* <li>{[f_ck, f_ckcube, f_ctm, fctk05, fctk95, Ecm, epsilon_c1, density, thermal_conductivity]}</li> */}
            </div>
        </div>
    )
}
export default ConcreteMaterialCard