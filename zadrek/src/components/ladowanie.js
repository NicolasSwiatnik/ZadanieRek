import React from "react";
import CircularProgress  from "@mui/material/CircularProgress";

const Ladowanie = () => {
    return ( 
        <div style={{textAlign: 'center'}}>
            <CircularProgress className='kolko' style={{color: "orange", scale: '3'}}/>
        </div>
    );
};

export default Ladowanie;