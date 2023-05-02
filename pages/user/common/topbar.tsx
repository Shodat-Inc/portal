import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";
import styles from '../../../styles/Home.module.css';
import { useSession } from "next-auth/react";
import Router from 'next/router';

const Topbar = () => {
    const { data: session } = useSession();
    const loginuser = session?.user;
    const [open, setOpen] = useState(false);
    const logout = () => {
        Router.push('/')
    }
    // if (loginuser?.role !== "admin") {
    //     return (
    //         <section className="grid h-screen place-items-center">
    //             <div className="w-25">
    //                 <p>You do not have permission to view this page!</p>
    //             </div>
    //             <div>
    //                 <button onClick={logout}>Go Back</button>
    //             </div>
    //         </section>
    //     );
    // }
    const openDropdown =() => {
        setOpen(!open)
    }
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

            <Link className="navbar-brand ps-3" href="#!">SHODAT</Link>

            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            </form>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item">
                    <Link className='nav-link' href='#!'>Client1 Tenant</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' href='#!'>Help</Link>
                </li>
                <li className="nav-item dropdown">
                    <button onClick={openDropdown} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user fa-fw"></i></button>
                    {open ? 
                    <ul className={`dropdown-menu dropdown-menu-end ${open ? styles.disBlock : ''}`} aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" href="#!">Settings</Link></li>
                        <li><Link className="dropdown-item" href="#!">Activity Log</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        {/* <li><Link className="dropdown-item" href="#!" onClick={() => signOut()}>Logout</Link></li> */}
                        <li><Link className="dropdown-item" href="#!" onClick={logout}>Logout</Link></li>
                    </ul>
                    : '' }
                </li>
            </ul>
        </nav>
    )
}
export default Topbar;