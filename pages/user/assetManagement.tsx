import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router';
import { getAssetsData } from '../../lib/getassets';
import Navbar from './common/navbar';

export async function getStaticProps() {
    const localData = await getAssetsData();
    return {
        props: {
            localData,
        },
    }
}

const assetManagement = (localData: any) => {
    const { data: session } = useSession();
    const router = useRouter();
    const [open, setOpen] = useState(false);
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
                                            <li><a>Assets Mgmt</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <div className={`${styles.searchBox}`}>
                                        <input type='text' placeholder='Search Assets' />
                                        <i className={`fa fa-search ${styles.fasearch}`}></i>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <div className={`${styles.importAssets} float-right`}>
                                        <button className={`${styles.btnImportAsset}`}>
                                            <i className={`fa fa-plus ${styles.faplus}`}></i>
                                            <span>Import Assets</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={`row ${styles.rowMargin}`}>
                                <div className='col-sm-3'>
                                    <div className={`${styles.createBlock}`}>
                                        <a href='/user/createAssetClass' className={`${styles.btnCreateBlock}`}>
                                            <i className="fa fa-plus"></i>
                                            <div className={`${styles.blockText}`}>Create Asset Class</div>
                                        </a>
                                    </div>
                                </div>

                                {localData.localData.map(({ assetName }) => (
                                    <div className='col-sm-3'>
                                        <div className={`${styles.createBlock}`}>
                                            <a href="#!" className={`${styles.btnCreateBlock} ${styles.btnBgBlue}`}>
                                                <div className={`${styles.blockText}`}>{assetName}</div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className='col-sm-3'>
                                    <div className={`${styles.createBlock}`}>
                                        <button className={`${styles.btnCreateBlock} ${styles.btnBgBlue}`}>
                                            <div className={`${styles.blockText}`}>Vehicles</div>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.createBlock}`}>
                                        <button className={`${styles.btnCreateBlock} ${styles.btnBgBlue}`}>
                                            <div className={`${styles.blockText}`}>Fright</div>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.createBlock}`}>
                                        <button className={`${styles.btnCreateBlock} ${styles.btnBgBlue}`}>
                                            <div className={`${styles.blockText}`}>Gas Station</div>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className={`${styles.createBlock}`}>
                                        <button className={`${styles.btnCreateBlock} ${styles.btnBgBlue}`}>
                                            <div className={`${styles.blockText}`}>Manufacturing Plants</div>
                                        </button>
                                    </div>
                                </div> */}
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
export default assetManagement