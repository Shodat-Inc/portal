import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router';


const eOpsWatch = () => {
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
                                            <li><a>eOps Watch</a></li>
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
                                            <a href='http://localhost:3000/user/createAssetClass' className={`${styles.btnCreateBlock} ${styles.blueBg}`}>
                                                <i className="fa fa-plus"></i>
                                                <div className={`${styles.blockText}`}>Import Product Images</div>
                                            </a>
                                        </div>
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
                                    <a href="javascript:;">Privacy Policy</a>
                                    &middot;
                                    <a href="javascript:;">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>



        </>
    )
}
export default eOpsWatch