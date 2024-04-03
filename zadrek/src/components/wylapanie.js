import React, { useState, useEffect } from "react";
import axios from "axios";
import Listatag from "./listatag";
import Ladownie from "./ladowanie";
import ErrorAlert from "./error";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

const Wylapanie = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
      };
    
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get('https://api.stackexchange.com/2.2/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow');
                setTags(response.data.items);
            } catch (error) {
                setTimeout(() => {
                    setError(error.message);
                    setOpenDialog(true);
                }, 1000);
            }  finally {
                setTimeout(() => {
                    setLoading(false);
                },1000);
            }
        };

        fetchTags();
    }, []);

    return ( 
        <div>
            {loading && <Ladownie/>}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <ErrorAlert message={error} handleClose={handleCloseDialog} />
            </Dialog>
            {!loading && !error && <Listatag tags={tags}/>}
        </div>
    );
};


export default  Wylapanie;