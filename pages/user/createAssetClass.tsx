import React, { useRef } from 'react';
import styles from '../../styles/Home.module.css';
import { signOut, useSession } from "next-auth/react";
import Router from 'next/router';
import Swal from 'sweetalert2'

const createAssetClass = () => {
    const { data: session } = useSession();
    console.log("session data", session)
    const user = session?.user;
    const newassets = useRef("");``

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

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
        const response = await fetch('/api/assets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    assetName: `${form_values.newassets}`,
                }
            )
        });
        const data = await response.json();
        if (data) {
            Swal.fire({
                title: 'Success!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Okay'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: "Something went wrong, please try again!",
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        }

        // console.log("STATUS MESSAGE", data);
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
                                            <li><a>Create Assets Class</a></li>
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
                                <div className='col-sm-6 col-md-6'>
                                    <div className={`${styles.importAssets} float-right`}>
                                        <button className={`${styles.btnImportAsset}`}>
                                            <i className={`fa fa-plus ${styles.faplus}`}></i>
                                            <span>Import Assets</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <form method='post' onSubmit={handleSubmit}>
                                <div className={`row ${styles.rowMargin}`}>
                                    <div className='col-sm-6'>
                                        <div className={`form-group ${styles.formGroup}`}>
                                            <label htmlFor="name">New Asset Class</label>
                                            <input
                                                type="text"
                                                className={`form-control ${styles.formControl}`}
                                                placeholder='Name'
                                                onChange={(e) => (newassets.current = e.target.value)}
                                                name='newassets'
                                                required
                                            />
                                        </div>

                                        <div className={`form-group ${styles.formGroup}`}>
                                            <div className={`${styles.createBlock} ${styles.createBlockv2}`}>
                                                <a href='http://localhost:3000/user/createSubAssets' className={`${styles.btnCreateBlock}`}>
                                                    <i className="fa fa-plus"></i>
                                                    <div className={`${styles.blockText}`}>Create Sub Asset</div>
                                                </a>
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
                                    <div className={`col-sm-6 ${styles.colpos}`}>
                                        <div className={`${styles.searchBoxv2}`}>
                                            <input
                                                type="text"
                                                id='searchBox'
                                                placeholder='Search Assets Classes'
                                            />
                                            <i className={`fa fa-search ${styles.fasearch}`}></i>
                                        </div>

                                        <div className={`${styles.saveWrap}`}>
                                            <button
                                                className={`${styles.btnsave}`}
                                            // onClick={() => saveAssets}
                                            >
                                                Save
                                            </button>
                                            <button className={`${styles.btnsave}`}>
                                                Cancel
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </form>
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
export default createAssetClass