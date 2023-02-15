import { Link as ReactLink } from 'react-router-dom';

function Footer() {
    return (
        <section className="col-lg-12 footer">

            <div className="col-lg-10 col-11 row mx-auto footer-main-section">

                <div className="col-lg-4 footer-section">
                    <img src="images/footer-logo.png" className="footer-logo" alt="footer logo" />
                    <p className="margin-y-2 font-14">Sellstuff.com is the only online marketplace in the UAE that helps customers list or buy used products online and ship the products too. </p>
                    <div className="col-lg-7 col-6 row">
                        <i className="fa-brands fa-facebook primary-icon font-20 col"></i>
                        <i className="fa-brands fa-instagram primary-icon font-20 col"></i>
                        <i className="fa-brands fa-tiktok primary-icon font-20 col"></i>
                        <i className="fa-brands fa-linkedin primary-icon font-20 col"></i>
                    </div>
                </div>

                <div className="col-lg-2 footer-section">

                </div>

                <div className="col-lg-2 footer-section">
                    <h5 className="margin-bottom-2">Quick Links</h5>
                    <ReactLink to="/" className="footer-link font-14">Home</ReactLink>
                    <ReactLink to={"/login"} className="footer-link font-14">Login</ReactLink>
                    <ReactLink to={'/register'} className="footer-link font-14" >Register</ReactLink>
                    <ReactLink to="/sell" className="footer-link font-14">Sell Furniture</ReactLink>
                    <ReactLink to="/buy" className="footer-link font-14">Buy Furniture</ReactLink>
                </div>

                <div className="col-lg footer-section footer-section-end">
                    <h5 className="margin-bottom-2">Contact Us</h5>
                    <div className="row mb-3">
                        <i className="fa-solid fa-location-dot font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-14">Flat 1103, Churchill Tower, Dubai, UAE</p>
                    </div>
                    <div className="row mb-3">
                        <i className="fa-solid fa-phone font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-14">+971 50 604 5355</p>
                    </div>
                    <div className="row">
                        <i className="fa-solid fa-envelope font-20 col-1 my-auto primary-icon"></i>
                        <p className="col-11 my-auto font-14">support@sellstuff.com</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer