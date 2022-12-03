import React, {useState} from "react";

function CommentHook() {


const [data, setData] = useState([]);

    let getValue = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}/comments`)
    .then(data => data.json())
    .then(data => setData(data),[])


}

    return(
        <>
        <div>
            <select onChange={getValue}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

    <div>
        {data.map((el, index) => (
        <section key={el.id}>
        <h2> {index+1}, {el.title}</h2>
        <p>{el.body}</p>
        </section>
        ))}
    </div>
</>
    );
}

export default CommentHook;