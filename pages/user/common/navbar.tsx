import Link from "next/link";
const Navbar = () => {

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <Link className="nav-link" href="/user/welcome">
                        <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                        Dashboard
                    </Link>

                    <Link className="nav-link" href="/user/assetManagement">
                        <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                        Asset Mgmt
                    </Link>

                    <Link className="nav-link" href="/user/eOpsWatch">
                        <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                        eOps Watch
                    </Link>

                    <Link className="nav-link" href="/user/eOpsTrace">
                        <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                        eOps Trace
                    </Link>

                    <Link className="nav-link" href="/user/eOpsProsense">
                        <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                        eOps Prosense
                    </Link>

                    <Link className="nav-link" href="/user/eOpsInsight">
                        <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                        eOps Insight
                    </Link>

                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Admin
            </div>
        </nav>
    )
}
export default Navbar;