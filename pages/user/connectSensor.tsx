import React from 'react';
import styles from '../../styles/Home.module.css';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link';


const ConnectSensor = () => {    
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
                                            <li><Link href='/user/eOpsTrace'>eOps Watch</Link></li>
                                            <li><Link href='/user/connectSensorInputs'>Vehicle: Tires</Link></li>\
                                            <li>Connect Sensor</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.flexRow}`}>
                                <div className='col-sm-1'>
                                    <Link href="/user/connectSensorInputs" className={`row ${styles.backButton}`}>
                                        <i className="fa fa-long-arrow-left"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin} ${styles.flexRow}`}>
                                <div className='col-sm-6'>                                   
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`form-group ${styles.selectBlock}`}>
                                            <label>Select Blob Storage or s3 Bucket</label>
                                            <select className='form-control'>
                                                <option value="Name">Name</option>
                                            </select>
                                            <i className="fa fa-sort-down"></i>
                                        </div>
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`form-group ${styles.selectBlock}`}>
                                            <label>Select API or FTP Endpoint </label>
                                            <select className='form-control'>
                                                <option value="Name">Name</option>
                                            </select>
                                            <i className="fa fa-sort-down"></i>
                                        </div>
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`form-group ${styles.selectBlock}`}>
                                            <label>Select Event Stream</label>
                                            <select className='form-control'>
                                                <option value="Name">Name</option>
                                            </select>
                                            <i className="fa fa-sort-down"></i>
                                        </div>
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`form-group ${styles.selectBlock}`}>
                                            <label>Training Models</label>
                                            <select className='form-control'>
                                                <option value="Name">Name</option>
                                            </select>
                                            <i className="fa fa-sort-down"></i>
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
export default ConnectSensor