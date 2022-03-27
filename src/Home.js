import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //let name = 'mario';
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( (blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
            })
        }, 2000);
    }, []); //normally inside this function, inside this useEffect we could do something like fetch data or communicate with some aunthetication service and those things are known as side effects in react

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!" />*/}
        </div>
    );
}

export default Home;