import React, { useState } from "react";
// import CommentListHook from "./CommentListHook";
import Comments2ListHook from "./Comments2ListHook";

function Comment2Hook() {
  const [data, setData] = useState([]);

  let getValue = (e) => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${e.target.value}/comments`
    )
      .then((data) => data.json())
      .then((data) => setData(data), []);
  };

  return (
    <>
      <div>
        <p>Choose post ID:</p>
        <select onChange={getValue}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div>
          {/* <CommentListHook data={data} /> */}
          <Comments2ListHook data={data} />
        </div>
      </div>
    </>
  );
}

export default Comment2Hook;
