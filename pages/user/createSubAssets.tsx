import React, { useRef } from 'react';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import Navbar from './common/navbar';
import Footer from './common/footer';
import Topbar from './common/topbar';
import Swal from 'sweetalert2';
import { getSubAssetsData } from '../../lib/getsubassets';
import Link from 'next/link'

export async function getStaticProps() {
    const subAssetData = await getSubAssetsData();
    return {
        props: {
            subAssetData,
        },
    }
}

const CreateSubAsset = (subAssetData: any) => {
    const router = useRouter();
    const assetName = useRef("");
    const assetDescription = useRef("");
    const propertyValue1 = useRef("");
    const propertyValue2 = useRef("");
    const propertyValue3 = useRef("");
    const parentAsset = router.query;    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
        const response = await fetch('/api/createSubAssets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    assetName: `${form_values.assetName}`,
                    assetDescription: `${form_values.assetDescription}`,
                    propertyValue1: `${form_values.propertyValue1}`,
                    propertyValue2: `${form_values.propertyValue2}`,
                    propertyValue3: `${form_values.propertyValue3}`,
                    parentAssetName: `${parentAsset.assets}`
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
                                            {parentAsset.assets ?
                                                <li>
                                                    <Link 
                                                    href={{
                                                        pathname: '/user/viewAssets',
                                                        query: {
                                                            assets: parentAsset.assets
                                                        }
                                                    }}
                                                    >
                                                        {parentAsset.assets} Assets Class
                                                    </Link>
                                                </li>
                                                : ""}
                                            <li>Create Sub-Asset</li>
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
                                <div className="col-sm-1 col-md-1"></div>
                                <div className='col-sm-5 col-md-5'>
                                    <div className={`${styles.importAssets} float-left`}>
                                        <button className={`${styles.btnBlue}`}>Track on Blockchain</button>
                                    </div>
                                </div>
                            </div>
                            <form method='post' onSubmit={handleSubmit}>
                                <div className={`row ${styles.rowMargin}`}>
                                    <div className='col-sm-6'>
                                        <div className={`form-group ${styles.formGroup}`}>
                                            <label htmlFor="name">Sub-Assets</label>
                                            <input
                                                type="text"
                                                className={`form-control ${styles.formControlFull}`}
                                                placeholder='Name'
                                                onChange={(e) => (assetName.current = e.target.value)}
                                                name='assetName'
                                                required
                                            />
                                        </div>

                                        <div className={`form-group ${styles.formGroup}`}>
                                            <label htmlFor="name">Description</label>
                                            <textarea
                                                className={`form-control ${styles.formControlTextarea}`}
                                                placeholder='Value'
                                                onChange={(e) => (assetDescription.current = e.target.value)}
                                                name='assetDescription'
                                                required
                                            />
                                        </div>

                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <div className={`form-group ${styles.formGroup}`}>
                                                    <label htmlFor="property1">Property 1</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${styles.formControlFull}`}
                                                        placeholder='Value'
                                                        onChange={(e) => (propertyValue1.current = e.target.value)}
                                                        name='propertyValue1'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-sm-4'>
                                                <div className={`form-group ${styles.formGroup}`}>
                                                    <label htmlFor="property2">Property 2</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${styles.formControlFull}`}
                                                        placeholder='Value'
                                                        onChange={(e) => (propertyValue2.current = e.target.value)}
                                                        name='propertyValue2'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-sm-4'>
                                                <div className={`form-group ${styles.formGroup}`}>
                                                    <label htmlFor="property3">Property 3</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${styles.formControlFull}`}
                                                        placeholder='Value'
                                                        onChange={(e) => (propertyValue3.current = e.target.value)}
                                                        name='propertyValue3'
                                                        required
                                                    />
                                                </div>
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
                                            <div className={`${styles.searchBoxOuter}`}>
                                                <div className={`${styles.searchBoxv2} ${styles.marginZero}`}>
                                                    <input
                                                        type="text"
                                                        name='searchBox'
                                                        id='searchBox'
                                                        placeholder='Search Assets Classes'
                                                    />
                                                    <i className={`fa fa-search ${styles.fasearch}`}></i>
                                                </div>
                                                <div className={`${styles.suggestionBox}`}>
                                                    <ul className={`${styles.suggestionList}`}>

                                                        {subAssetData.subAssetData.map((assetName: any, index: any) => (
                                                            <li key={index}><button><i className="fa fa-plus"></i></button> <span>{assetName.assetName}</span></li>
                                                        ))}

                                                    </ul>
                                                </div>
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
export default CreateSubAsset