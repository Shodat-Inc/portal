import React from 'react';
import styles from '../../styles/Home.module.css';
import { useSession } from "next-auth/react";
import Router from 'next/router';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link';
import Image from 'next/image';

const ImportProductImages = () => {
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
                            <div className="row">
                                <div className={`${styles.mainContent}`}>
                                    <div className={`${styles.pagination}`}>
                                        <ol>
                                            <li><Link href='/user/eOpsWatch'>eOps Watch</Link></li>
                                            <li>Vehicle: Tires</li>
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
                                        <input type='text' name='wearDeductionModel' placeholder='Wear Deduction Model' className='form-control' />
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
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.createBlock}`}>
                                            <Link href='/user/importImages' className={`${styles.btnCreateBlock}`}>
                                                <i className="fa fa-plus"></i>
                                                <div className={`${styles.blockText}`}>Import Product Images</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.imageBlock}`}>
                                            <span>IMG-1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.imageBlock}`}>
                                            <span>IMG-2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin}`}>
                                <div className='col-sm-4'>
                                    <div className={`${styles.folderStructure}`}>
                                        <button>
                                            <Image src="/folder.png" alt='' />
                                            <span>Front Angle</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className={`${styles.folderStructure}`}>
                                        <button>
                                            <Image src="/folder.png" alt='' />
                                            <span>Side Angle</span>
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
export default ImportProductImages