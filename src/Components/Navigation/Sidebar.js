import React from 'react';
import Navigation from './Navigation';

const Sidebar = () => {
    return (
        <>
            <div className='enteteNav d-flex justify-content-center align-items-center'>
                <p className='logo text-white fw-bold display-6'>MySchool</p> 
            </div>
            <div className='d-flex justify-content-center '>
                <div className='px-3 py-5 navigation '>
                    <Navigation/>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
