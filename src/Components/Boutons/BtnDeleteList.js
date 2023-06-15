import React from 'react';
import { useDispatch } from 'react-redux';

const BtnDeleteList = ({actionReducer}) => {
    const dispatch= useDispatch()
    return (
        <>
            <button className='btn btn-danger' onClick={() => dispatch(actionReducer)}><i class="fa-solid fa-trash"></i></button>
        </>
    );
}

export default BtnDeleteList;
