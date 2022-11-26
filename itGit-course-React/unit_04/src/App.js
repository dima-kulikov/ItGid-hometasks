import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let refTask6 = React.createRef();
  let refOut = React.createRef();
  const [out6, setOut6] = useState('');
  let refTask7 = React.createRef();
  let refTask8Out = React.createRef();
  let countTask8 = '';

  function task1() {
    console.log('task2')
  }
  function task2() {
    let task2 = document.querySelector('.task-2');
    task2.classList.add('active');
  }
  function task3(event) {
    console.log(event.target.value)
  }
  function task4() {
    count4 += 1;
    console.log(count4)
  }
  function task5(event) {
    let div5 = document.querySelector('.out-5');

    if(event.target.checked) {
      div5.innerHTML = event.target.value;
    }else{
      div5.innerHTML = 0;
    }
  }

  function task6() {
    // console.log(refTask6.current.value);
    refOut.current.innerHTML = refTask6.current.value;
    setOut6(refTask6.current.value);

  }
  function task7() {

    //функция возвращает чисто от 1 до 255
    function RundomColor() {
     return Math.floor(Math.random()*255) + 1;
    }

    refTask7.current.style.backgroundColor = `rgb(${RundomColor()}, ${RundomColor()}, ${RundomColor()})`;
  }
  
  function task8(e) {

  if(isNaN(e.key)){
    countTask8 += 0;
    refTask8Out.current.innerHTML = countTask8;
  }else{
    countTask8 += 1;
    refTask8Out.current.innerHTML = countTask8;
  };
  };

  // function task9() {

  // }
  // let ar10 = [5, 6, 7];
  // function task10() {

  // }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5}/>
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={refTask6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={refOut}></div>
        <div className="out-6">{out6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={refTask7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={refTask8Out}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
