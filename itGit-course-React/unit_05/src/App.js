import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [st1, setSt1] = useState('');
  let input1 = React.createRef();

  const [st2, setSt2] = useState('');
  const [st3, setSt3] = useState('');
  const [st4, setSt4] = useState('');
  
  const [st5, SetSt5] = useState('');
  let checkBox5 = React.createRef();

  const [st6, setSt6] = useState();

  const [st7, setSt7] = useState();
  let block7 = React.createRef();


  const [st8, setSt8] = useState('');
  const [st9, setSt9] = useState('');


 // -----1 -й вариант решения (10 задача)----------
  // const [st10, setSt10] = useState([5, 6, 7]);
  // let i10 = React.createRef();
  
 // -----2 -й вариант решения (10 задача)----------
  const [st10, setSt10] = useState([5, 6, 7]);




  function task1() {
    let state = st1;
     state = input1.current.value;
    setSt1(state)
  }


  function task2() {
    let state = st2;
    state++;
    setSt2(state)
  }


  function task3(e) {
    let out3 = st3;
    out3 = e.target.value;
    setSt3(out3);
  }


  function task4() {
    let out = st4;
    out++;
    setSt4(out);
  }


  function task5() {
  let out = st5;
  if(checkBox5.current.checked){
    out = checkBox5.current.value;
  }else{
    out = 0;
  }
  SetSt5(out)
  }


  function task6(e) {
    let out = st6;
    out = e.target.value;
    setSt6(out)
  }


  function task7() {
    let random = () => (Math.floor(Math.random() * 255));  

    let out = st7;
        out = `rgb(${random()}, ${random()}, ${random()})`;

        block7.current.style.backgroundColor = out
        
        setSt7(out);
  }


  function task8(e) {

    let out = st8;
    if(isNaN(e.key)){
      out += 0;
    }else{
      out += 1;
    };

    setSt8(out);
  }


  function task9(e) {
    let out = st9;
    out = e.target.value;

    setSt9(out);
  }

  // -----1 -й вариант решения----------
  // let ar10 = [5, 6, 7];
  // function task10(e) {
  //  let input10 = i10.current.value;
  //   setSt10([...st10, input10]);
  // };

  // -----2 -й вариант решения----------
  // let ar10 = [5, 6, 7];

  function task10(event) {
    event.preventDefault()
    let value = event.target.elements.name1.value;
    setSt10([...st10, value]);
  };


  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text" ref={input1} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
       <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} ref={checkBox5}/>
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={block7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      {/* // -----1 -й вариант решения (10 задача)---------- */}
      {/* <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={i10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>  */}

      {/* // -----2 -й вариант решения (10 задача)----------   */}
      <section>
        <form onSubmit={task10}>
        <h2>Task 10</h2>
        <input type="number" name="name1" className="i-10"></input>
        <input type="submit" className="task-10" value="Push" />
         <div>{st10}</div>
        </form>
      </section>
    </>
  );
}

export default App;
