import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router';
import Navbar from './common/navbar';


const connectSensorInputs = () => {
    const { data: session } = useSession();
    console.log("session data", session)
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
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                <a className="navbar-brand ps-3" href="#!">SHODAT</a>

                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                </form>

                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item">
                        <a className='nav-link' href='#!'>Client1 Tenant</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='#!'>Help</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user fa-fw"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Settings</a></li>
                            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!" onClick={() => signOut()}>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>


            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Navbar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <div className="row">
                                <div className={`${styles.mainContent}`}>
                                    <div className={`${styles.pagination}`}>
                                        <ol>
                                            <li><a href='/user/eOpsTrace'>eOps Trace</a></li>
                                            <li><a>Vehicle: Battery</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.flexRow}`}>
                                <div className='col-sm-1'>
                                    <a href="/user/eOpsTrace" className={`row ${styles.backButton}`}>
                                        <i className="fa fa-long-arrow-left"></i>
                                    </a>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.inputWrap}`}>
                                        <input type='text' name='batteryLifeModel' placeholder='Battery Life Prediction Model' className='form-control' />
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.btnWrap}`}>
                                        <button className={`${styles.btnBlue}`}>Model Performance</button>
                                    </div>
                                </div>
                                <div className='col-sm-2'>
                                    <div className={`${styles.btnWrap}`}>
                                        <button className={`${styles.btnBlue}`}>Model Run</button>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.btnWrap}`}>
                                        <button className={`${styles.btnBlue}`}>Configure Alerts</button>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin}`}>
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.createBlock}`}>
                                            <a href='/user/connectSensor' className={`${styles.btnCreateBlock}`}>
                                                <i className="fa fa-plus"></i>
                                                <div className={`${styles.blockText}`}>Connect Sensor Input</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.imageBlock}`}>
                                            <span>Temperature</span>
                                            {/* <img src ="" alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.imageBlock}`}>
                                            <span>Swell Rate</span>
                                            {/* <img src ="" alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin}`}>
                                <div className='col-sm-4'>
                                    <div className={`${styles.folderStructure}`}>
                                        <button>
                                            <img src="/folder.png" />
                                            <span>C-Rate</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className={`${styles.folderStructure}`}>
                                        <button>
                                            <img src="/folder.png" />
                                            <span>Impedance</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2023</div>
                                <div>
                                    <a href="#!">Privacy Policy</a>
                                    &middot;
                                    <a href="#!">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>



        </>
    )
}
export default connectSensorInputs