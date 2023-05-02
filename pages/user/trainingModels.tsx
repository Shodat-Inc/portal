import React from 'react';
import styles from '../../styles/Home.module.css';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link';
import Image from 'next/image';

const TrainingModels = () => {    
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
                                            <li><Link href='/user/eOpsWatch'>eOps Watch</Link></li>
                                            <li>Vehicle: Engine</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.flexRow}`}>
                                <div className='col-sm-1'>
                                    <Link href="/user/eOpsWatch" className={`row ${styles.backButton}`}>
                                        <i className="fa fa-long-arrow-left"></i>
                                    </Link>
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
                                        <Image src='/crack.png' alt='crackImage' />
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className={`${styles.detailWrap}`}>
                                        <div className={`${styles.sideBlock}`}>
                                            <h5>My Objects</h5>
                                            <div className={`${styles.tags}`}>
                                                <Link href='#'>Crystallization <i className="fa fa-times"></i></Link>
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
                    <Footer />
                </div>
            </div>



        </>
    )
}
export default TrainingModels