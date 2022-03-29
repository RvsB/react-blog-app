import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); //for aborting the fetch

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }) //we pass all the properties we need for the fetch as an object argument
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => { //here the data variable being passed in as a parameter is different from the state var data
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }   
            })
        }, 2000);

        return () => abortCont.abort();//returning a function from an effect is the optional cleanup mechanism for effects, react performs the cleanup when the component unmounts
    }, [url]); //normally inside this function, inside this useEffect we could do something like fetch data or communicate with some aunthetication service and those things are known as side effects in react

    return { data, isPending, error };

}


export default useFetch;