import React from 'react';
import { useDispatch } from 'react-redux';

const BtnModifList = () => {
    const dispatch = useDispatch()
    return (
        <>
            <button className='btn btn-warning text-white'><i class="fa-solid fa-pen"></i></button>
        </>
    );
}

export default BtnModifList;