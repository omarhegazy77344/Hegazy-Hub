function TopNav() {
    let sectionBG = {
        "background-color": "#222831",
        "font-family": "Nunito",
    };

    let facebookDIV = {
        "background-color": "#4267B2",
        padding: "6% 0",
    };

    let instagramDIV = {
        "background-color": "#C13584",
        padding: "6% 0",
    };

    let linkedinDIV = {
        "background-color": "#0077b5",
        padding: "6% 0",
    };

    let tiktokDIV = {
        "background-color": "#00acee",
        padding: "6% 0",
    };

    return (
        <div className="top-nav justify-content-center" style={sectionBG}>
            <div class="col-lg-10 row justify-content-center mx-auto">
                <div class="col-lg row">
                    <i className="col-lg-1 font-20 fa-solid fa-location-dot primary-icon m-auto"></i>
                    <p className="col-lg-11 text-light text-start my-auto font-12">
                        Flat 1103, Churchill Tower, Dubai, UAE
                    </p>
                </div>

                <div class="col-lg-3 row">
                    <i className="col-lg-2 font-20 fa-solid fa-envelope primary-icon m-auto"></i>
                    <p className="col-lg-10 text-light my-auto font-12">
                        info@sellstuff.com
                    </p>
                </div>

                <div class="col-lg-3 row">
                    <i className="col-lg-2 font-20 fa-solid fa-phone primary-icon m-auto"></i>
                    <p className="col-lg-10 text-light my-auto font-12">+97161234567</p>
                </div>

                <div class="col-lg-2 row">
                    <div class="col-lg text-center" style={facebookDIV}>
                        <i class="fa-brands fa-facebook-f text-light font-14 mx-auto"></i>
                    </div>
                    <div class="col-lg text-center" style={instagramDIV}>
                        <i class="fa-brands fa-instagram text-light font-14 mx-auto"></i>
                    </div>
                    <div class="col-lg text-center" style={linkedinDIV}>
                        <i class="fa-brands fa-linkedin-in text-light font-14 mx-auto"></i>
                    </div>
                    <div class="col-lg text-center" style={tiktokDIV}>
                        <i class="fa-brands fa-twitter text-light font-14 mx-auto"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;
