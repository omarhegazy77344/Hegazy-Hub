function Features() {

    let sustainableImage = {
        "padding": "15% 0",
        "background-image": "url(images/sustainable-chair.png)",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "bottom",
    }

    let biophilicImage = {
        "padding": "15% 0",
        "background-image": "url(images/biophilic-design.png)",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "bottom",
    }

    let comfortableImage = {
        "padding": "15% 0",
        "background-image": "url(images/comfortable-design.png)",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "bottom",
    }

    return (
        <section>

            <div className="col-lg-10 mx-auto row margin-y-4">
                <div className="col-lg-7 my-auto features-content pe-5">
                    <h3>Sustainable</h3><br />
                    <p>The sustainable materials used for furniture designs that are to last long and bring no damage to the environment are becoming more popular. Materials like solid wood, rattan, jute, bamboo, cane would be preferred for furniture as compared to synthetic or man-made materials.</p>
                </div>
                <div className="col-lg-5" style={sustainableImage}>
                </div>
            </div>

            <div className="col-lg-10 mx-auto row margin-y-4">
                <div className="col-lg-5" style={biophilicImage}>
                </div>
                <div className="col-lg-7 my-auto features-content ps-5">
                    <h3>Biophilic</h3><br />
                    <p>Our love for nature never dies. And since a lot of us can't make time to visit our beautiful nature, we help bring nature into their house. Green walls, furniture, or a combination will create a calming space that recreates the beneficial effects of being outdoors.</p>
                </div>
            </div>

            <div className="col-lg-10 mx-auto row margin-y-4">
                <div className="col-lg-7 my-auto features-content pe-5">
                    <h3>Comfortable and Stylish</h3><br />
                    <p>Style over comfort? Nope, it looks good but isn't convenient. How about style with comfort? That's sounds and feels better, right? Keeping that in mind, all of our furniture are made of premium quality that styles your house without affecting the comfort level.</p>
                </div>
                <div className="col-lg-5" style={comfortableImage}>
                </div>
            </div>

        </section>
    )
}

export default Features