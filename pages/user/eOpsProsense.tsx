import React from 'react';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';

const EopsProsense = () => {
    return (

        <>
           <Topbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Navbar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">eOps Prosense</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">eOps Prosense</li>
                            </ol>
                            <div className="row">
                                
                                
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>



        </>
    )
}
export default EopsProsense