import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router';
import { getAssetsData } from '../../lib/getassets';
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


const ViewSubAssets = (localData: any) => {
    const { data: session } = useSession();
    const loginuser = session?.user;
    const router = useRouter();
    const parentAsset = router.query;
    const [assetData, subAssetData] = useState(localData.localData);

    useEffect(() => {
        const filtered = localData.localData.filter((item: any) => {
            if (item.assetName === parentAsset.subassets && item.parentAssetName === parentAsset.parentasset) {
                return item;
            }
        });

        subAssetData(filtered)

    }, [localData.localData])

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
                                            <li>
                                                <Link
                                                    href={{
                                                        pathname: '/user/viewAssets',
                                                        query: {
                                                            assets: parentAsset.parentasset
                                                        }
                                                    }}
                                                >
                                                    {parentAsset.parentasset} Assets Mgmt
                                                </Link>
                                            </li>
                                            <li>{parentAsset.subassets}</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <Link
                                        href={{
                                            pathname: '/user/viewAssets',
                                            query: {
                                                assets: parentAsset.parentasset
                                            }
                                        }}
                                        className={`${styles.backButton}`}
                                    >
                                        <i className="fa fa-long-arrow-left"></i>
                                    </Link>
                                </div>
                                <div className='col-sm-6 col-md-6'></div>
                            </div>

                            <div className={`row ${styles.rowMargin} ${styles.viewSubAssets}`}>
                                <div className='col-sm-6'>
                                    <div className={`form-group ${styles.formGroup}`}>
                                        <label htmlFor="name">Sub-Assets</label>
                                        <div className={`${styles.showText}`}>
                                            {assetData[0]?.assetName}
                                        </div>
                                    </div>

                                    <div className={`form-group ${styles.formGroup}`}>
                                        <label htmlFor="name">Description</label>
                                        <div className={`${styles.showText}`}>
                                            {assetData[0]?.assetDescription}
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <div className={`form-group ${styles.formGroup}`}>
                                                <label htmlFor="property1">Property 1</label>
                                                <div className={`${styles.showText}`}>
                                                    {assetData[0]?.propertyValue1}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <div className={`form-group ${styles.formGroup}`}>
                                                <label htmlFor="property2">Property 2</label>
                                                <div className={`${styles.showText}`}>
                                                    {assetData[0]?.propertyValue2}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <div className={`form-group ${styles.formGroup}`}>
                                                <label htmlFor="property3">Property 3</label>
                                                <div className={`${styles.showText}`}>
                                                    {assetData[0]?.propertyValue3}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-sm-6'></div>
                            </div>

                        </div>
                    </main>
                    <Footer />
                </div>
            </div>

        </>
    )
}
export default ViewSubAssets;