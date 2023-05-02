import React from 'react';
import styles from '../../styles/Home.module.css';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link';
import Image from 'next/image';


const ConnectSensorInputs = () => {
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
                                            <li><Link href='/user/eOpsTrace'>eOps Trace</Link></li>
                                            <li>Vehicle: Battery</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.flexRow}`}>
                                <div className='col-sm-1'>
                                    <Link href="/user/eOpsTrace" className={`row ${styles.backButton}`}>
                                        <i className="fa fa-long-arrow-left"></i>
                                    </Link>
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
                                            <Link href='/user/connectSensor' className={`${styles.btnCreateBlock}`}>
                                                <i className="fa fa-plus"></i>
                                                <div className={`${styles.blockText}`}>Connect Sensor Input</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.imageBlock}`}>
                                            <span>Temperature</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.imageBlock}`}>
                                            <span>Swell Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin}`}>
                                <div className='col-sm-4'>
                                    <div className={`${styles.folderStructure}`}>
                                        <button>
                                            <Image src="/folder.png" alt="" />
                                            <span>C-Rate</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className={`${styles.folderStructure}`}>
                                        <button>
                                            <Image src="/folder.png" alt="" />
                                            <span>Impedance</span>
                                        </button>
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
export default ConnectSensorInputs