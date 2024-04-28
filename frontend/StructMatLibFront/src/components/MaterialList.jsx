import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import ConcreteMaterialCard from './ConcreteMaterialCard';
import SteelMaterialCard from './SteelMaterialCard';
import TimberMaterialCard from './TimberMaterialCard';
import Notification from './Notification';

import concreteService from '../services/concretes';
import steelService from '../services/steels';
import timberService from '../services/timbers';

import { deleteConcrete } from '../reducers/concreteReducer';
import { deleteSteel } from '../reducers/steelReducer';
import { deleteTimber } from '../reducers/timberReducer';

const MaterialList = ({ displayMaterial }) => {
    const [notificationMessage, setNotificationMessage] = useState(null);
    const dispatch = useDispatch();

    const materials = {
        concrete: {
            service: concreteService,
            reducer: deleteConcrete,
            data: useSelector((state) => state.concrete),
        },
        steel: {
            service: steelService,
            reducer: deleteSteel,
            data: useSelector((state) => state.steel),
        },
        timber: {
            service: timberService,
            reducer: deleteTimber,
            data: useSelector((state) => state.timber),
        },
    };

    const handleDeleteMaterial = async (id, type) => {
        const material = materials[type].data.find((m) => m.id === id);
        const confirmDelete = window.confirm(`Delete ${material.name}?`);
        if (!confirmDelete) return;

        try {
            await materials[type].service.deleteMaterial(id);
            setNotificationMessage(`${material.name} deleted successfully.`);
            dispatch(materials[type].reducer(id));
        } catch (error) {
            setNotificationMessage(`Failed to delete ${material.name}.`);
        } finally {
            setTimeout(() => {
                setNotificationMessage(null);
            }, 6000);
        }
    };

    const renderMaterialCard = (material) => {
        switch (displayMaterial) {
            case 'concrete':
                return (
                    <ConcreteMaterialCard
                        {...material}
                        deleteThis={(id) => handleDeleteMaterial(id, 'concrete')}
                    />
                );
            case 'steel':
                return (
                    <SteelMaterialCard
                        {...material}
                        deleteThis={(id) => handleDeleteMaterial(id, 'steel')}
                    />
                );
            case 'timber':
                return (
                    <TimberMaterialCard
                        {...material}
                        deleteThis={(id) => handleDeleteMaterial(id, 'timber')}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Notification message={notificationMessage} />
            {/* ToDO: Filtering */}
            <p>filter: <input></input></p>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    paddingLeft: 20,
                    paddingTop: 20,
                    width: 1000,
                }}
            >
                {materials[displayMaterial].data.length === 0 ? (
                    <div>No {displayMaterial} materials yet added</div>
                ) : (
                    materials[displayMaterial].data
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((material) => (
                        <div key={material.id}>{renderMaterialCard(material)}</div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MaterialList;
