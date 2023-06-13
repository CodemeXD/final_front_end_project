import React from 'react';
import BtnNav from './BtnNav';

const Navigation = () => {
    return (
        <>
            <BtnNav id='nav-eleve'
            titre='Elèves' 
            icone= {<i class="fa-solid fa-graduation-cap"></i>} 
            lienForm='studentform'
            lienList='studentlist'
            />
            <BtnNav id='nav-prof'
            titre='Professeurs' 
            icone= {<i class="fa-solid fa-graduation-cap"></i>} 
            lienForm='profform'
            lienList='proflist'
            />
        </>
    );
}

export default Navigation;
