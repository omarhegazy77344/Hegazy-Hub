import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";







function createProductCard(products) {
    return (
        <ProductCard name={products.name} price={products.price} location={products.location} img={products.picture} />
    )
}

var findData = new FormData();
findData.append('null', null);


function ProductsScreen() {





    
    const [productDetails, setproductDetails] = useState();
    // Create a JS object like an HTML form element 

    useEffect(
        function () {
            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/products/find`,
                {
                    'method': 'POST',
                    // 'headers':{
                    //     'Authorization':`Bearer ${localStorage.getItem('jsonwebtoken')}`
                    // }
                }
            )
                .then(
                    function (backendResponse) {
                        return backendResponse.json()
                    }
                )
                .then(
                    function (jsonResponse) {
                        setproductDetails(jsonResponse);
                    }
                )
                .catch(
                    function (backendError) {
                        console.log('backendEroor', backendError)
                    }
                )
        },
        []
    );

    return (

        <section>

            <div className="bg-dark text-light text-center padding-y-4">
                <h1>Product Listing</h1>
            </div>

            <div className="col-lg-10 col-10 col-md-10 row mx-auto margin-y-1">
                {productDetails?.map(createProductCard)}
            </div>

        </section>
    );

}
export { findData };
export default ProductsScreen;