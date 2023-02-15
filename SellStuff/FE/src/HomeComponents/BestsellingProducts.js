import ProductCard from "../ProductCard"

function BestsellingProducts() {

    const products = [
        {
            name: "Sofa Bed",
            price: "2000",
            location: "Al Mamzar, Dubai",
            img: "./images/img3.png"
        },
        {
            name: "Double Bed",
            price: "3000",
            location: "JLT, Dubai",
            img: "./images/biophilic-design.png"
        },
        {
            name: "Office Desk",
            price: "1500",
            location: "Muwaileh, Sharjah",
            img: "./images/sustainable-chair.png"
        },
        {
            name: "TV Table",
            price: "1900",
            location: "Al Khan, Dubai",
            img: "./images/img3.png"
        },
    ]

    return (
        <section className="col-lg-10 col-11 primary-section margin-y-5  mx-auto">

            <h2 className="heading">Trending In <strong>Beds</strong></h2>
            <div className="heading-border"></div>

            <div className="col-lg-12 col-12 col-md-10 row mx-auto">
                <ProductCard name={products[0].name} price={products[0].price} location={products[0].location} img={products[0].img} />
                <ProductCard name={products[1].name} price={products[1].price} location={products[1].location} img={products[1].img} />
                <ProductCard name={products[2].name} price={products[2].price} location={products[2].location} img={products[2].img} />
                <ProductCard name={products[3].name} price={products[3].price} location={products[3].location} img={products[3].img} />
            </div>

        </section>
    )
}

export default BestsellingProducts