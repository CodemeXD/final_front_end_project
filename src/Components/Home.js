import React from 'react';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div className='d-flex justify-content-center '>
            <div className='col-2 px-3 py-5 navigation '>
                <Navigation/>
            </div>
            <div className="container">
                <div className="row py-5">
                    <h1 className='fw-bold display-6 text-center'>WELCOME TO DASHBOARD</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
