import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router';


const createSubAsset = () => {
    const { data: session } = useSession();
    const router = useRouter()
    console.log("session data", session)
    const [open, setOpen] = useState(false);
    const user = session?.user;

    const handleOpen = () => {
        const currentState = open;
        setOpen(!currentState)
    }

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

                <a className="navbar-brand ps-3" href="javascript:;">SHODAT</a>

                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                </form>

                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item">
                        <a className='nav-link' href='javascript:;'>Client1 Tenant</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='javascript:;'>Help</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i></a>
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
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                        <div className="nav">
                        <a className="nav-link" href="http://localhost:3000/user/welcome">
                                    <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                                    Dashboard
                                </a>

                                <a className="nav-link" href="http://localhost:3000/user/assetManagement">
                                    <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                                    Asset Mgmt
                                </a>

                                <a className="nav-link" href="http://localhost:3000/user/eOpsWatch">
                                    <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                                    eOps Watch
                                </a>

                                <a className="nav-link" href="http://localhost:3000/user/eOpsTrace">
                                    <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                                    eOps Trace
                                </a>

                                <a className="nav-link" href="http://localhost:3000/user/eOpsProsense">
                                    <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                                    eOps Prosense
                                </a>

                                <a className="nav-link" href="http://localhost:3000/user/eOpsInsight">
                                    <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                                    eOps Insight
                                </a>

                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Admin
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <div className="row">
                                <div className={`${styles.mainContent}`}>
                                    <div className={`${styles.pagination}`}>
                                        <ol>
                                            <li><a href='http://localhost:3000/user/assetManagement'>Assets Mgmt</a></li>
                                            <li><a href='http://localhost:3000/user/createAssetClass'>Vehical Assets Class</a></li>
                                            <li><a>Create Sub-Asset</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <a href='http://localhost:3000/user/assetManagement' className={`${styles.backButton}`}>
                                        <i className="fa fa-long-arrow-left"></i>
                                    </a>
                                </div>
                                <div className="col-sm-1 col-md-1"></div>
                                <div className='col-sm-5 col-md-5'>
                                    <div className={`${styles.importAssets} float-left`}>
                                        <button className={`${styles.btnBlue}`}>Track on Blockchain</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`row ${styles.rowMargin}`}>
                                <div className='col-sm-6'>
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <label htmlFor="name">Sub-Assets</label>
                                        <input type="text" className={`form-control ${styles.formControlFull}`} placeholder='Name' />
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <label htmlFor="name">Description</label>
                                        <textarea className={`form-control ${styles.formControlTextarea}`} placeholder='Value' />
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <div className={`form-group ${styles.formGroup}`}>
                                                <label htmlFor="property1">Property 1</label>
                                                <input type="text" name='property1' className={`form-control ${styles.formControlFull}`} placeholder='Value' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <div className={`form-group ${styles.formGroup}`}>
                                                <label htmlFor="property2">Property 2</label>
                                                <input type="text" name='property2' className={`form-control ${styles.formControlFull}`} placeholder='Value' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <div className={`form-group ${styles.formGroup}`}>
                                                <label htmlFor="property3">Property 3</label>
                                                <input type="text" name='property3' className={`form-control ${styles.formControlFull}`} placeholder='Value' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <div className={`${styles.createBlock} ${styles.createBlockv2}`}>
                                            <a href='http://localhost:3000/user/createAssetClass' className={`${styles.btnCreateBlock}`}>
                                                <i className="fa fa-plus"></i>
                                                <div className={`${styles.blockText}`}>Create & Assign Asset Class Tag</div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-1"></div>
                                <div className={`col-sm-5 ${styles.colpos}`}>
                                    <div className={`${styles.formGroup}`}>
                                        <button className={`${styles.btnBlue}`}>Images</button>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <button className={`${styles.btnBlue}`}>Tracers</button>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <button className={`${styles.btnBlue}`}>Alerts & Monitors</button>
                                    </div>

                                    <div className={`${styles.formGroup}`}>
                                        <label>Assign parent or Child Sub-Asset</label>
                                        <div className={`${styles.searchBoxv2} ${styles.marginZero}`}>
                                            <input type="text" name='searchBox' id='searchBox' placeholder='Search Assets Classes' />
                                            <i className={`fa fa-search ${styles.fasearch}`}></i>
                                        </div>
                                    </div>

                                    <div className={`${styles.saveWrap}`}>
                                        <button className={`${styles.btnsave}`}>
                                            Save
                                        </button>
                                        <button className={`${styles.btnsave}`}>
                                            Cancel
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
export default createSubAsset