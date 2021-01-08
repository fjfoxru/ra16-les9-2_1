import {useState, useEffect} from'react';

function useJsonFetch (url, opts) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
        try {
            setLoading(true)
            setData(null)
            const response = await fetch(url);

            if (String(response.status).match(/^[200-299]/)) {
                let reader = await response.body.getReader();
                let decoder = new TextDecoder();
                let data = '';
                while(true) {
                    let { done, value } = await reader.read();
                    data += decoder.decode(value);
                    if (done) break;
                }
                setData(JSON.parse(data));
                setHasError(false);
            } else {
                setHasError(true);
                setData(null);
            }

    
        } catch(e) {
            setHasError(true);
        } finally {
            setLoading(false)
        }
    } 
    fetchData();
        
    }, [url]);


    return[data, isLoading, hasError];
}

export default useJsonFetch;

