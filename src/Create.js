import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();// prevents the page from refreshing when we hit the submit button
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog) //to convert it from an js object to json, also the json server will add the id property automatically
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            // history.go(-1); this goes back or forward respective to the number we mention, either negative or positive
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}//when the value of title changes it gets reflected here, when we try to change value, onchange gets triggered and it records our input and setTitle to that recorded input and then when we set value={title}, it shows us what we entered in the input field.
                    onChange={(e) => setTitle(e.target.value)} //e is event object
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={ (e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;