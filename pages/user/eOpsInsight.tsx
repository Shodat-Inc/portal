import React from 'react';
import { useSession } from "next-auth/react";
import Router from 'next/router'
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';

const EopsInsight = () => {
    const { data: session } = useSession();  
    const user = session?.user;

    const logout = () => {
        Router.push('/')
    }

    if (user?.role !== "admin") {
        return (
            <section className="grid h-screen place-items-center">
                <div className="w-25">
                    <p>You do not have permission to view this page!</p>
                </div>
                <div>
                    <button onClick={logout}>Go Back</button>
                </div>
            </section>
        );
    }

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
                            <h1 className="mt-4">eOps Insight</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">eOps Insight</li>
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
export default EopsInsight