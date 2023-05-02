import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { getAssetsData } from '../../lib/getassets';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link'


export async function getStaticProps() {
    const localData = await getAssetsData();
    return {
        props: {
            localData
        },
    }
}

const AssetManagement = (localData: any) => {
    const [query, setQuery] = useState('');
    const [filteredList, setFilteredList] = useState(localData.localData); 
    const handleChange = (e: any) => {
        var lowerCase = e.target.value.toLowerCase()
        setQuery(lowerCase);
        var updatedList = [...localData.localData];

        updatedList = updatedList.filter((item: any) => {
            return item.assetName.toLowerCase().indexOf(lowerCase) !== -1;
        })
        setFilteredList(updatedList)
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
                                            <li>Assets Mgmt</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <div className={`${styles.searchBox}`}>
                                        <input
                                            type='text'
                                            placeholder='Search Assets'
                                            onChange={handleChange}
                                            value={query}
                                        />
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
                                        <Link href='/user/createAssetClass' className={`${styles.btnCreateBlock}`}>
                                            <i className="fa fa-plus"></i>
                                            <div className={`${styles.blockText}`}>Create Asset Class</div>
                                        </Link>
                                    </div>
                                </div>

                                {filteredList.map((assetName: any, index: any) => (
                                    <div className='col-sm-3' key={index}>
                                        <div className={`${styles.createBlock}`}>
                                            <Link
                                                href={{
                                                    // pathname: '/user/createSubAssets',
                                                    pathname: '/user/viewAssets',
                                                    query: {
                                                        assets: assetName.assetName
                                                    }
                                                }}
                                                className={`${styles.btnCreateBlock} ${styles.btnBgBlue}`}
                                            >
                                                <div className={`${styles.blockText}`}>{assetName.assetName}</div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>



        </>
    )
}
export default AssetManagement