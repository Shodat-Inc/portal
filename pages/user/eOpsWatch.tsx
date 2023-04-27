import React from 'react';
import styles from '../../styles/Home.module.css';
import { useSession } from "next-auth/react";
import Router from 'next/router';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link';

const EopsWatch = () => {
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
                                            <li>eOps Watch</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className={`row ${styles.rowMargin} ${styles.flexRow}`}>
                                <div className='col-sm-6'>
                                    <h4 className={`${styles.title}`}>Choose a Model</h4>
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
                                                <option value="Tires">Tires</option>
                                                <option value="Fright">Fright</option>
                                                <option value="Gas Station">Gas Station</option>
                                                <option value="Manufacturing Plants">Manufacturing Plants</option>
                                            </select>
                                            <i className="fa fa-sort-down"></i>
                                        </div>
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`form-group ${styles.selectBlock}`}>
                                            <label>Training Models</label>
                                            <select className='form-control'>
                                                <option value="Water Detection Model">Water Detection Model</option>
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
                                            <Link href='/user/importProductImages' className={`${styles.btnCreateBlock} ${styles.blueBg}`}>
                                                <i className="fa fa-plus"></i>
                                                <div className={`${styles.blockText}`}>Import Product Images</div>
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
export default EopsWatch