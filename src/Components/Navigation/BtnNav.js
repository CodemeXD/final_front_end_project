import React from 'react';
import { Link } from 'react-router-dom';

const BtnNav = (props) => {
    const {titre, icone,lienForm, lienList, id} = props

    
    return (
        <div className=''>
            <div className="d-grid text-white gap-2">
                <button class="btn btn-link w-100 pb-0 mt-2" type="button" data-bs-toggle="collapse" data-bs-target={"#"+id} aria-expanded="false" aria-controls={id}>
                {icone} {titre}
                </button>
                <div class="collapse text-center" id={id}>
                    <Link to={lienForm}>
                        <button className='btn py-0 btn-link'>Ajouter</button>
                    </Link>
                    <Link to={lienList}>
                        <button className='btn py-0 btn-link'>Liste</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BtnNav;
