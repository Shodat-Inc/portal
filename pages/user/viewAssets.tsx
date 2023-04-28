import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router';
import { getSubAssetsData } from '../../lib/getsubassets';
import Navbar from './common/navbar';
import Topbar from './common/topbar';
import Footer from './common/footer';
import Link from 'next/link';


export async function getStaticProps() {
    const localData = await getSubAssetsData();
    return {
        props: {
            localData
        },
    }
}


const ViewAssets = (localData: any) => {
    const { data: session } = useSession();
    const loginuser = session?.user;
    const [query, setQuery] = useState('');
    const router = useRouter();
    const parentAsset = router.query;

    const filtered = localData.localData.filter((item: any) => {
        return item.parentAssetName === parentAsset.assets;
    });
    const [filteredList, setFilteredList] = useState(filtered);

    const logout = () => {
        Router.push('/')
    }
    if (loginuser?.role !== "admin") {
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


    const handleChange = (e: any) => {
        var lowerCase = e.target.value.toLowerCase()
        setQuery(lowerCase);
        var updatedList = [...filtered];
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
                                            <li><Link href="/user/assetManagement">Assets Mgmt</Link></li>
                                            {parentAsset.assets ?
                                                <li>{parentAsset.assets}</li>
                                                : ""}
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
                                        <Link
                                            href={{
                                                pathname: '/user/createSubAssets',
                                                query: {
                                                    assets: parentAsset.assets
                                                }
                                            }}
                                            className={`${styles.btnCreateBlock}`}
                                        >
                                            <i className="fa fa-plus"></i>
                                            <div className={`${styles.blockText}`}>Create Sub Asset</div>
                                        </Link>
                                    </div>
                                </div>

                                {filteredList.map((assetName: any, index: any) => (
                                    <div className='col-sm-3' key={index}>
                                        <div className={`${styles.createBlock}`}>
                                            <Link
                                                href={{
                                                    pathname: '/user/viewSubAssets',
                                                    query: {
                                                        subassets: assetName.assetName,
                                                        parentasset : parentAsset.assets
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
export default ViewAssets