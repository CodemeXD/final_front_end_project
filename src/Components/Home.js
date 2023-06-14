import React from 'react';
import Navigation from './Navigation/Navigation';
import Sidebar from './Navigation/Sidebar';

const Home = () => {
    return (
        <div className='d-flex'>
            <div className="col-2">
            <Sidebar/>
            </div>
            <div className='col'>
                <div className="container">
                    <div className="row py-5">
                        <h1 className='fw-bold display-6 text-center'>WELCOME TO DASHBOARD</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
