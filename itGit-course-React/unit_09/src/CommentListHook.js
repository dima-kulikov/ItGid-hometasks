import React from "react";

function CommentListHook(props) {
  return (
    <div>
      {props.data.map((el, index) => (
        <section key={el.id}>
          <p>
            <b>
              {index + 1}. {el.email}
            </b>
          </p>
          <p>{el.body}</p>
        </section>
      ))}
    </div>
  );
}

export default CommentListHook;
