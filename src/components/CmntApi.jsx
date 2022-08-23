import React, { useState } from 'react';
import { useEffect } from 'react';

import CmntCard from './CmntCard';

const CmntApi = () => {

    const [valu, setValu] = useState([]);

    const getUser = () => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => setValu(json));
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            {valu.slice(0, 12)?.map((item) => <CmntCard item={item} />)}
        </>

    );
};

export default CmntApi;