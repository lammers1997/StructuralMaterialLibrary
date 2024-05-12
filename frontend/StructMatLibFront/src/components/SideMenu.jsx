import '../styles/SideMenu.css'


const SideMenu = ({ onMaterialChange, displayMaterial }) => {


    return (
        <div className='sideMenu'>

            {/* Option to display different materials */}

            <button className={displayMaterial === 'concrete' ? 'menuButtonActive' : 'menuButton'} onClick={() => onMaterialChange('concrete')}>
                Concrete
            </button>
            <button className={displayMaterial === 'steel' ? 'menuButtonActive' : 'menuButton'} onClick={() => onMaterialChange('steel')}>
                Steel
            </button>
            <button className={displayMaterial === 'timber' ? 'menuButtonActive' : 'menuButton'} onClick={() => onMaterialChange('timber')}>
                Timber
            </button>

        </div>
    );
};

export default SideMenu;
