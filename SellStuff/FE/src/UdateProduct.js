import { useEffect, useContext, useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { UserContext } from "./UserContext";
import { Link as ReactLink } from 'react-router-dom';
import { findData } from "./ProductsScreen";

function UpdateProduct() {
    const [ProductDetails, setProductDetails] = useState();

    // The states are: 
    // (1) null, (2) "client error", (3) "loading", (4) "backend error", (5) "success"
    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);

    // 1. Declare variables (not defined)
    var nameField;
    var priceField;
    var pictureField;
    var typeField;
    var roomField;
    var conditionField;
    var locationField;
    var usageField;
    var pictureField;

    // Create a JS object like an HTML form element 
    var formData = new FormData();
    var findData = new FormData();

    let productImage = {
        "height": "450px",
        "background-position": "center",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    }


    function attachFile(evt) {


        // Creating an array from the files attached by user
        var files = Array.from(evt.target.files);

        files.forEach(
            function (fileAttachment, index) {
                formData.append(index, fileAttachment);
            }
        )
    }
    function addListItem(str) {
        return <li>{str}</li>
    }
    function update() {


        // 2. Validate the fields
        var errors = [];

        if (nameField.value.length === 0) {
            errors.push('Please enter product name');
        }

        if (priceField.value.length === 0) {
            errors.push('Please enter product price');
        }

        // 3. If any field is not validated, go to "client error"
        if (errors.length > 0) {
            setFormState("client error");
            setErrorsState(errors);
        }

        // 4. If all fields are valid
        else {
            // 5. Go to "loading"
            setFormState("loading");
            setErrorsState([]);

            // 6. Send data backend

            formData.append('name', nameField.value);
            formData.append('price', priceField.value);
            formData.append('_id', "63a4351d46d6a3c19832681e");
            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/products/update`,
                {
                    'method': 'PUT',
                    // 'headers':{
                    //     'Authorization':`Bearer ${localStorage.getItem('jsonwebtoken')}`
                    // },
                    'body': formData


                }
            )
                .then(
                    function (backendResponse) {
                        // Convert the HTTP string response to JSON
                        return backendResponse.json();
                    }
                )
                .then(
                    // 7. If backend sends success, go to "success"
                    function (jsonResponse) {
                        console.log(jsonResponse);
                        if (jsonResponse._id) {
                            console.log('backend response /products/update', jsonResponse)
                            setFormState("success");

                            // Update the user context
                            //  updateUser(jsonResponse);
                            setProductDetails(jsonResponse);
                        }
                        else {
                            setFormState("backend error");
                        }
                    }
                )
                .catch(
                    // 8. If backends sends error, go to "backend error"
                    function (backendError) {
                        console.log('backendError at /users/login', backendError)
                        setFormState("backend error");
                    }
                )
        }
    }



    useEffect(
        function () {

            findData.append('_id', "63a4351d46d6a3c19832681e");
            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/products/findone`,
                {
                    'method': 'POST',
                    'body': findData,
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
                        setProductDetails(jsonResponse);
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

    if (ProductDetails) {
        return (

            <Container maxWidth="lg">
                <Box pt={8}>
                    <Typography component="h1" variant="h2">
                        Product Edit
                    </Typography>
                </Box>

                <Box mt={4} mb={4}>
                    <div class="col-lg-8" >
                        <img src={ProductDetails.picture} style={productImage}></img>
                    </div>
                    <FormControl fullWidth sx={{ mb: 2 }}>

                        <Typography component="h5" variant="h4">
                            Name:{ProductDetails.name}
                        </Typography>

                        <TextField
                            inputRef={
                                function (thisElement) {
                                    nameField = thisElement;
                                }
                            }
                            label="Update name" required={false} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Typography component="h4" variant="h4">
                            Price:{ProductDetails.price}
                        </Typography>
                        <TextField
                            type="number"
                            inputRef={
                                function (thisElement) {
                                    priceField = thisElement;
                                }
                            }
                            label="Update price" required={false} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Typography component="h4" variant="h4">
                            Type:{ProductDetails.type}
                        </Typography>
                        <TextField
                            type="string"
                            inputRef={
                                function (thisElement) {
                                    typeField = thisElement;
                                }
                            }
                            label="Update type" required={false} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Typography component="h4" variant="h4">
                            Room:{ProductDetails.room}
                        </Typography>
                        <TextField
                            type="string"
                            inputRef={
                                function (thisElement) {
                                    roomField = thisElement;
                                }
                            }
                            label="Update room" required={false} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Typography component="h4" variant="h4">
                            Location:{ProductDetails.location}
                        </Typography>
                        <TextField
                            type="string"
                            inputRef={
                                function (thisElement) {
                                    locationField = thisElement;
                                }
                            }
                            label="Update location" required={false} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Typography component="h4" variant="h4">
                            Condition:{ProductDetails.condition}
                        </Typography>
                        <TextField
                            type="string"
                            inputRef={
                                function (thisElement) {
                                    conditionField = thisElement;
                                }
                            }
                            label="Update condition" required={false} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <Typography component="h4" variant="h4">
                            Usage:{ProductDetails.usage}
                        </Typography>
                        <TextField
                            type="string"
                            inputRef={
                                function (thisElement) {
                                    usageField = thisElement;
                                }
                            }
                            label="Update usage" required={false} />
                    </FormControl>
                </Box>

                <Box mt={4} mb={4}>

                    <Typography component="p" variant="body1" gutterBottom>
                        Upload your profile picture (optional)
                    </Typography>

                    <br />

                    <Button size="small" component="label" variant="contained" >
                        Upload
                        <input
                            ref={function (thisElement) { pictureField = thisElement }}
                            onClick={attachFile}
                            onChange={attachFile}
                            hidden accept="image/*"
                            multiple type="file"
                        />
                    </Button>

                </Box>

                <Box display="flex">

                    {
                        formState !== "loading" &&
                        <Button to={'/pupdate'}
                            component={ReactLink}
                            onClick={update} size="large" variant="contained">Update</Button>
                    }

                    {
                        formState === "loading" &&
                        <CircularProgress />
                    }
                </Box>

                <Box mt={2}>

                    {
                        formState === "client error" &&
                        <Alert severity="error">
                            <ul>
                                {
                                    errorsState.map(addListItem)
                                }
                            </ul>
                        </Alert>
                    }

                    {
                        formState === "backend error" &&
                        <Alert severity="error">
                            <ul>
                                {
                                    errorsState.map(addListItem)
                                }
                            </ul>
                        </Alert>
                    }

                    {
                        formState === "success" &&
                        <Alert severity="success">
                            You have registered successfully!
                        </Alert>
                    }
                </Box>

            </Container>
        )
    }

    else {
        return (
            <p>Loading...</p>
        )
    }
}

export default UpdateProduct;