import { useEffect, useState } from "react";
import { Link as ReactLink } from 'react-router-dom';

function Cart() {

    const [userDetails, setUserDetails] = useState();
    var data;
    var T = 0;
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
                        setUserDetails(jsonResponse);
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
    data = userDetails;
    
    return (
        <section className="margin-y-3 container-fluid mx-auto row">

            <div className="col-lg-9">
                <h1 className="text-center margin-bottom-2">My Cart</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-lg-1 text-center"></th>
                            <th className="col-lg-8 text-center">Item</th>
                            <th className="col-lg text-center">Price</th>
                        </tr>
                    </thead>
                    {data?.map((product) => (
                        <tbody>
                            <tr>
                                <td className="text-center"><i class="fa-solid fa-xmark font-20"></i></td>
                                <td><h6 className="bold">{product.name}</h6></td>
                                <td><p className="text-center">{product.price}</p></td>
                                <td className="d-none">{T += product.price}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>

            <div className="col-lg-3">
                <h5 className="bold">Summary</h5><hr />
                <div className="row">
                    <p className="col-lg-6">Subtotal</p>
                    <p className="col-lg-6 text-end">AED {T}</p>
                </div>
                <div className="row">
                    <p className="col-lg-6">Shipping</p>
                    <p className="col-lg-6 text-end">AED 0.00</p>
                </div>
                <div className="row">
                    <p className="col-lg-6">Tax</p>
                    <p className="col-lg-6 text-end">AED 7.50</p>
                </div>
                <hr />
                <div className="row">
                    <p className="col-lg-6 bold">Total</p>
                    <p className="col-lg-6 text-end bold">{T + 7.5}</p>
                </div>
                <div className="col-lg-12">
                    <ReactLink to={'/checkout'}> <button className="btn btn-primary bold w-100" >Proceed To Checkout</button> </ReactLink>
                </div>
            </div>



        </section>
    )
}

export default Cart