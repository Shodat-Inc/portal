import Link from "next/link";
const Footer = () => {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Shodat 2023</div>
                    <div>
                        <Link href="#!">Privacy Policy</Link>
                        &middot;
                        <Link href="#!">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;