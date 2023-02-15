import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function AddProductScreen() {
    // The states are:
    // (1) null, (2) "client error", (3) "loading", (4) "backend error", (5) "success"
    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);

    // 1. Declare variables (not defined)
    var nameField;
    var priceField;
// eslint-disable-next-line
    var pictureField;
    var typeField;
    var roomField;
    var conditionField;
    var locationField;
    var usageField;

    // Create a JS object like an HTML form element
    var formData = new FormData();

    function attachFile(evt) {
        console.log("file data", evt.target.files);
        // Creating an array from the files attached by user
        var files = Array.from(evt.target.files);

        files.forEach(function (fileAttachment, index) {
            formData.append(index, fileAttachment);
        });
    }

    function register() {
        // 2. Validate the fields
        var errors = [];

        if (nameField.value.length === 0) {
            errors.push("Please enter product name");
        }

        if (priceField.value.length === 0) {
            errors.push("Please enter product price");
        }

        if (typeField.value.length === 0) {
            errors.push("Please enter product name");
        }

        if (roomField.value.length === 0) {
            errors.push("Please enter product price");
        }
        if (locationField.value.length === 0) {
            errors.push("Please enter product name");
        }

        if (usageField.value.length === 0) {
            errors.push("Please enter product price");
        }

        if (conditionField.value.length === 0) {
            errors.push("Please enter product price");
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
            formData.append("name", nameField.value);
            formData.append("price", priceField.value);
            formData.append("type", typeField.value);
            formData.append("room", roomField.value);
            formData.append("location", locationField.value);
            formData.append("usage", usageField.value);
            formData.append("condition", conditionField.value);

            fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/products/add`, {
                method: "POST",
                body: formData,
            })
                .then(function (backendResponse) {
                    // Convert the HTTP string response to JSON
                    return backendResponse.json();
                })
                .then(
                    // 7. If backend sends success, go to "success"
                    function (jsonResponse) {
                        if (jsonResponse.status === "ok") {
                            console.log("backend response /users/register", jsonResponse);
                            setFormState("success");
                        } else {
                            setFormState("backend error");
                            setErrorsState([jsonResponse.message]);
                        }
                    }
                )
                .catch(
                    // 8. If backends sends error, go to "backend error"
                    function (backendError) {
                        console.log("backendError at /users/register", backendError);
                        setFormState("backend error");
                    }
                );
        }
    }

    function addListItem(str) {
        return <li>{str}</li>;
    }

    return (
        <Container maxWidth="sm">
            <Box pt={8}>
                <Typography component="h1" variant="h2">
                    Add Product to sell
                </Typography>
            </Box>

            <Box mt={4} mb={2}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        inputRef={function (thisElement) {
                            nameField = thisElement;
                        }}
                        label="Product Name"
                        required={true}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        type="number"
                        inputRef={function (thisElement) {
                            priceField = thisElement;
                        }}
                        label="Price"
                        required={true}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        type="String"
                        inputRef={function (thisElement) {
                            typeField = thisElement;
                        }}
                        label="Type"
                        required={true}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        type="String"
                        inputRef={function (thisElement) {
                            roomField = thisElement;
                        }}
                        label="Room"
                        required={true}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        type="String"
                        inputRef={function (thisElement) {
                            locationField = thisElement;
                        }}
                        label="Location"
                        required={true}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        type="String"
                        inputRef={function (thisElement) {
                            conditionField = thisElement;
                        }}
                        label="Condition"
                        required={true}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        type="String"
                        inputRef={function (thisElement) {
                            usageField = thisElement;
                        }}
                        label="Usage"
                        required={true}
                    />
                </FormControl>
            </Box>

            <Box mt={4} mb={4}>
                <Typography component="p" variant="body1" gutterBottom>
                    Upload product picture (optional)
                </Typography>

                <br />

                <Button size="small" component="label" variant="contained">
                    Upload
                    <input
                        ref={function (thisElement) {
                            pictureField = thisElement;
                        }}
                        onClick={attachFile}
                        onChange={attachFile}
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                    />
                </Button>
            </Box>

            <Box display="flex">
                {formState !== "loading" && (
                    <Button onClick={register} size="large" variant="contained">
                        Send
                    </Button>
                )}

                {formState === "loading" && <CircularProgress />}
            </Box>

            <Box mt={2}>
                {formState === "client error" && (
                    <Alert severity="error">
                        <ul>{errorsState.map(addListItem)}</ul>
                    </Alert>
                )}

                {formState === "backend error" && (
                    <Alert severity="error">
                        <ul>{errorsState.map(addListItem)}</ul>
                    </Alert>
                )}

                {formState === "success" && (
                    <Alert severity="success">You have registered successfully!</Alert>
                )}
            </Box>
        </Container>
    );
}

export default AddProductScreen;
