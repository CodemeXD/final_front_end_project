import React from 'react';
import { useDispatch } from 'react-redux';

const BtnDeleteList = ({actionReducer}) => {
    const dispatch= useDispatch()
    return (
        <>
            <button className='btn btn-danger mx-2 shadow' onClick={() => dispatch(actionReducer)}><i className="fa-solid fa-trash"></i></button>
        </>
    );
}

export default BtnDeleteList;
