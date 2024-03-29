import React, { useState, useEffect } from "react";
import axios from "axios";
import Listatag from "./listatag";
import Ladownie from "./ladowanie";
import ErrorAlert from "./error";

const Wylapanie = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get('https://api.stackexchange.com/2.2/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow');
                setTags(response.data.items);
            } catch (error) {
                setError(error.message);
            }  finally {
                setLoading(false);
            }
        };

        fetchTags();
    }, []);

    return ( 
        <div>
            {loading && <Ladownie/>}
            {error && <ErrorAlert message={error} />}
            {!Ladownie && !error && <Listatag tags={tags}/>}
        </div>
    );
};


export default  Wylapanie;