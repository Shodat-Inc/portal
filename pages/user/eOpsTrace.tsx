import React from 'react';
import styles from '../../styles/Home.module.css';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link';

const EopsTrace = () => {  

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
                            <div className="row">
                                <div className={`${styles.mainContent}`}>
                                    <div className={`${styles.pagination}`}>
                                        <ol>
                                            <li>eOps Trace</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin} ${styles.flexRow}`}>
                                <div className='col-sm-6'>
                                    <h4 className={`${styles.title}`}>Connect Inputs</h4>
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`form-group ${styles.selectBlock}`}>
                                            <label>Select Asset Class</label>
                                            <select className='form-control'>
                                                <option value="Vehicles">Vehicles</option>
                                                <option value="Fright">Fright</option>
                                                <option value="Gas Station">Gas Station</option>
                                                <option value="Manufacturing Plants">Manufacturing Plants</option>
                                            </select>
                                            <i className="fa fa-sort-down"></i>
                                        </div>
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`form-group ${styles.selectBlock}`}>
                                            <label>Select Sub-Asset </label>
                                            <select className='form-control'>
                                                <option value="Battery">Battery</option>
                                                <option value="Fright">Fright</option>
                                                <option value="Gas Station">Gas Station</option>
                                                <option value="Manufacturing Plants">Manufacturing Plants</option>
                                            </select>
                                            <i className="fa fa-sort-down"></i>
                                        </div>
                                    </div>                                   

                                </div>
                                <div className='col-sm-6'>
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.createBlock} ${styles.createBlockv2}`}>
                                            <Link href='/user/connectSensorInputs' className={`${styles.btnCreateBlock} ${styles.blueBg}`}>
                                                <i className="fa fa-plus"></i>
                                                <div className={`${styles.blockText}`}>Connect Sensor Inputs</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>



        </>
    )
}
export default EopsTrace