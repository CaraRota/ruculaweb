import axios from 'axios';
import { useEffect, useState } from 'react';

function useMerger(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url]);

    return { data, error }
}

export default useMerger