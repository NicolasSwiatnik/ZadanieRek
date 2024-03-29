import React from "react";
import  Alert  from "@mui/material/Alert";

const ErrorAlert = ({message}) => {
    return <Alert severity="error">{message}</Alert>;
};


export default ErrorAlert;