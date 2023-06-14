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
            icone= {<i class="fa-solid fa-person-chalkboard"></i>} 
            lienForm='profform'
            lienList='proflist'
            />
            <BtnNav id='nav-note'
            titre='Notes' 
            icone= {<i class="fa-solid fa-pen-to-square"></i>} 
            lienForm='noteform'
            lienList='notelist'
            />
            <BtnNav id='nav-filiere'
            titre='Filières' 
            icone= {<i class="fa-solid fa-building-columns"></i>} 
            lienForm='filiereform'
            lienList='filierelist'
            />
            <BtnNav id='nav-matiere'
            titre='Matières' 
            icone= {<i class="fa-solid fa-book-bookmark"></i>} 
            lienForm='matiereform'
            lienList='matierelist'
            />
            <BtnNav id='nav-coef'
            titre='Coefficients' 
            icone= {<i class="fa-solid fa-calculator"></i>} 
            lienForm='coefform'
            lienList='coeflist'
            />
        </>
    );
}

export default Navigation;
