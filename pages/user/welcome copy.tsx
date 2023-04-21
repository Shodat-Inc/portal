import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Router from 'next/router'


const welcome = () => {
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
            <header>
                <nav aria-label="menu nav" className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

                    <div className="flex flex-wrap items-center">
                        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                            <a href="#" aria-label="Home">
                                <div className='siteName'>SHODAT</div>
                            </a>
                        </div>

                        <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                            <span className="relative w-full">
                                <div className="absolute search-icon">

                                </div>
                            </span>
                        </div>

                        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <a className="inline-block py-2 px-4 text-white no-underline" href="#">Client1 Tenent</a>
                                </li>
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Help</a>
                                </li>
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <div className="relative inline-block">
                                        <button className="drop-button text-white py-2 px-2" onClick={handleOpen}> <span className="pr-2"><i className="em em-robot_face"></i></span> Hi, User1 <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </button>

                                        {
                                            open ?

                                                <div id="myDropdown" className={`dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible1`}>
                                                    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw"></i> Profile</a>
                                                    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw"></i> Settings</a>
                                                    <div className="border border-gray-800"></div>
                                                    <a href="#" onClick={() => signOut()} className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                                                </div>
                                                : ''
                                        }
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </header>


            <main>

                <div className="flex flex-col md:flex-row">
                    <nav aria-label="alternative nav">
                        <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">

                            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                                    <li className="mr-3 flex-1">
                                        <a href="http://localhost:3000/user/welcome" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600-1 hover:border-blue-600">
                                            <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <a href="http://localhost:3000/user/assetManagement" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Asset Management</span>
                                        </a>
                                    </li>

                                    <li className="mr-3 flex-1">
                                        <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">eOps Watch</span>
                                        </a>
                                    </li>

                                    <li className="mr-3 flex-1">
                                        <a href="#" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">eOps Trace</span>
                                        </a>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <a href="#" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">eOps ProSense</span>
                                        </a>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <a href="#" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">eOps Insight</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </nav>
                    <section>
                        <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-12 pb-24 md:pb-5">

                            <div className="bg-gray-800 pt-3">
                                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                                    <h1 className="font-bold pl-2">Dashboard</h1>
                                </div>
                            </div>

                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h2 className="font-bold uppercase text-gray-600">Total Revenue</h2>
                                                <p className="font-bold text-3xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                    <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h2 className="font-bold uppercase text-gray-600">Total Users</h2>
                                                <p className="font-bold text-3xl">249 <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                    <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i></div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h2 className="font-bold uppercase text-gray-600">New Users</h2>
                                                <p className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse"></i></div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h2 className="font-bold uppercase text-gray-600">Server Uptime</h2>
                                                <p className="font-bold text-3xl">152 days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                    <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-inverse"></i></div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h2 className="font-bold uppercase text-gray-600">To Do List</h2>
                                                <p className="font-bold text-3xl">7 tasks</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                    <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-red-600"><i className="fas fa-inbox fa-2x fa-inverse"></i></div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h2 className="font-bold uppercase text-gray-600">Issues</h2>
                                                <p className="font-bold text-3xl">3 <span className="text-red-500"><i className="fas fa-caret-up"></i></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </main>



        </>
    )
}
export default welcome