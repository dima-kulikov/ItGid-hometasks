import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTest } from "./app/taskReducerSlice";
import { newText } from "./app/taskReducerSlice";

export default function TextOut() {
  const task2 = useSelector(selectTest); // получаем данные из store
  const dispatch = useDispatch();
  let myInputValue = React.createRef();

  const addNewText = () => {
    dispatch(newText(myInputValue.current.value));
  };

  return (
    <div>
      <h2>Task 2 - home work</h2>

      <input tupe="text" ref={myInputValue} />
      <button onClick={addNewText}>add in text</button>
      <hr />

      <p>{task2}</p>
    </div>
  );
}
