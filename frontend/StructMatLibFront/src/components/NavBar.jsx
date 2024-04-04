const NavBar = () => {
    const buttonStyle = {
        fontSize: '24px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        marginTop: '15px'
    }
    const handleButtonClick = (material) => {
        // Handle button click based on the material
        console.log(`Button clicked for ${material}`);
    };

    return (
        <div style={{
            background: 'lightgray', border: '1px solid #000000',
            height: '100vh', width: 150, zIndex: 0,
            position: 'fixed', left: 0, top: 80,

        }}>

                <button style={buttonStyle} onClick={() => handleButtonClick('Concrete')}>
                    Concrete
                </button>
                <button style={buttonStyle} onClick={() => handleButtonClick('Steel')}>
                    Steel
                </button>
                <button style={buttonStyle} onClick={() => handleButtonClick('Timber')}>
                    Timber
                </button>
            {/* Add more navigation links as needed */}
        </div>
    );
};

export default NavBar;
