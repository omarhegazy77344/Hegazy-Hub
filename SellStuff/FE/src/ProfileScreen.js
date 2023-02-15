import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link as ReactLink } from 'react-router-dom';


function ProfileScreen() {

    const [userDetails, setUserDetails] = useState();

    // The states are: 
    // (1) null, (2) "client error", (3) "loading", (4) "backend error", (5) "success"
    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);

    // 1. Declare variables (not defined)
    var firstNameField;
    var lastNameField;
    // eslint-disable-next-line
    var avatarField;

    // Create a JS object like an HTML form element 
    var formData = new FormData();


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

        if (firstNameField.value.length === 0) {
            errors.push('Please enter your first name');
        }

        if (lastNameField.value.length === 0) {
            errors.push('Please enter your last name');
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
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/update`,
                {
                    'method': 'PUT',
                    'headers': {
                        'Authorization': `Bearer ${localStorage.getItem('jsonwebtoken')}`
                    },
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
                            console.log('backend response /users/update', jsonResponse)
                            setFormState("success");

                            // Update the user context
                            //  updateUser(jsonResponse);
                            setUserDetails(jsonResponse);
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
            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`,
                {
                    'method': 'POST',
                    'headers': {
                        'Authorization': `Bearer ${localStorage.getItem('jsonwebtoken')}`
                    }
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
    if (userDetails) {
        return (
            <Container maxWidth="sm">
                <Box pt={8}>
                    <Typography component="h1" variant="h2">
                        Profile
                    </Typography>

                    <Avatar alt="O" src={userDetails.avatar} sx={{ width: 96, height: 96 }} />

                    <Typography component="h4" variant="h4">
                        E-Mail:{userDetails.email}
                    </Typography>

                </Box>

                <Box mt={4} mb={4}>




                    <FormControl fullWidth sx={{ mb: 2 }}>

                        <Typography component="h5" variant="h4">
                            Firstname:{userDetails.firstName}
                        </Typography>

                        <TextField
                            inputRef={
                                function (thisElement) {
                                    firstNameField = thisElement;
                                }
                            }
                            label="Update Firstname" required={false} />
                    </FormControl>

                    <Typography component="h4" variant="h4">
                        Lastname:{userDetails.lastName}
                    </Typography>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <TextField
                            inputRef={
                                function (thisElement) {
                                    lastNameField = thisElement;
                                }
                            }
                            label="Update Lastname" required={false} />
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
                        
                            ref={function (thisElement) { avatarField = thisElement }}
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
                        <Button to={'/profile'}
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

export default ProfileScreen;