import React, { useRef } from 'react';
import styles from '../../styles/Home.module.css';
import Swal from 'sweetalert2';
import Navbar from './common/navbar';
import Footer from './common/footer';
import Topbar from './common/topbar';
import { getAssetsData } from '../../lib/getassets';
import Link from 'next/link';


export async function getStaticProps() {
    const localData = await getAssetsData()
    return {
        props: {
            localData,
        },
    }
}

const CreateAssetClass = (localData: any) => {
    const newassets = useRef("");    
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
                                            <li><Link href='/user/assetManagement'>Assets Mgmt</Link></li>
                                            <li>Create Assets Class</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <Link href='/user/assetManagement' className={`${styles.backButton}`}>
                                        <i className="fa fa-long-arrow-left"></i>
                                    </Link>
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
                                                <Link href='/user/createSubAssets' className={`${styles.btnCreateBlock}`}>
                                                    <i className="fa fa-plus"></i>
                                                    <div className={`${styles.blockText}`}>Create Sub Asset</div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={`form-group ${styles.formGroup}`}>
                                            <div className={`${styles.createBlock} ${styles.createBlockv2}`}>
                                                <Link href='/user/createAssetClass' className={`${styles.btnCreateBlock}`}>
                                                    <i className="fa fa-plus"></i>
                                                    <div className={`${styles.blockText}`}>Create & Assign Asset Class Tag</div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`col-sm-6 ${styles.colpos}`}>
                                        <div className={`${styles.searchBoxOuter}`}>
                                            <div className={`${styles.searchBoxv2}`}>
                                                <input
                                                    type="text"
                                                    id='searchBox'
                                                    placeholder='Search Assets Classes'
                                                />
                                                <i className={`fa fa-search ${styles.fasearch}`}></i>
                                            </div>
                                            <div className={`${styles.suggestionBox}`}>
                                                <ul className={`${styles.suggestionList}`}>

                                                    {localData.localData.map((assetName:any, index:any) => (
                                                        <li key={index}><button><i className="fa fa-plus"></i></button> <span>{assetName.assetName}</span></li>
                                                    ))}

                                                </ul>
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
                            </form>
                        </div>
                    </main>
                   <Footer />
                </div>
            </div>



        </>
    )
}
export default CreateAssetClass;