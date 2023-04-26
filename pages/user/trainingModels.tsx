import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router';
import Navbar from './common/navbar';

const trainingModels = () => {
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
                                            <li><a href='/user/eOpsWatch'>eOps Watch</a></li>
                                            <li><a>Vehicle: Engine</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.flexRow}`}>
                                <div className='col-sm-1'>
                                    <a href="/user/eOpsWatch" className={`row ${styles.backButton}`}>
                                        <i className="fa fa-long-arrow-left"></i>
                                    </a>
                                </div>
                                <div className='col-sm-4'>
                                    <div className={`${styles.inputWrap}`}>
                                        <input type='text' name='wearDeductionModel' placeholder='Crack Detection Model' className='form-control' />
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.btnWrap}`}>
                                        <button className={`${styles.btnBlue}`}>Model Performance</button>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.btnWrap}`}>
                                        <button className={`${styles.btnBlue}`}>Configure Alerts</button>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin}`}>
                                <div className='col-sm-12'>
                                    <div className={`${styles.imageDetailWrap}`}>
                                        <div className={`${styles.imageDetail}`}>Image Detail</div>
                                        <div className={`${styles.undoChanges}`}>
                                            <button>
                                                <i className="fa fa-undo"></i>
                                                <span>Undo Changes</span>
                                            </button>
                                        </div>
                                        <div className={`${styles.regionsShown}`}>
                                            <div className={`${styles.checkWrap}`}>
                                                <input type='checkbox' name='regionShown' />
                                                <span className={`${styles.chklbl}`}></span>
                                            </div>
                                            Regions Shown
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin}`}>
                                <div className='col-sm-8'>
                                    <div className={`${styles.imageWrapp}`}>
                                        <img src='/crack.png' alt='crackImage' />
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className={`${styles.detailWrap}`}>
                                        <div className={`${styles.sideBlock}`}>
                                            <h5>My Objects</h5>
                                            <div className={`${styles.tags}`}>
                                                <a href='#'>Crystallization <i className="fa fa-times"></i></a>
                                            </div>
                                            <div className={`${styles.sliderWrap}`}>
                                                <p>Only show suggested objects if the probability is above the selected threshold</p>
                                                <div className={`${styles.rangeSlider}`}>
                                                    <label htmlFor="myRange">threshold value: 80%</label>
                                                    <input type="range" min="1" max="100" value="80" id="myRange" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${styles.sideBlock}`}>
                                            <h5>Predictions</h5>
                                            <div className={`${styles.predictionsTxt}`}>Predictions are shown in <span>red</span></div>
                                            <div className={`${styles.predictionsTable}`}>
                                                <table className='table'>
                                                    <thead>
                                                        <th>Tag</th>
                                                        <th>Probability</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Crystalization</td>
                                                            <td>86.5%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wiring</td>
                                                            <td>12.5%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Crystalization</td>
                                                            <td>6.9%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Crack</td>
                                                            <td>2.5%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-sm-4'></div>
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
export default trainingModels