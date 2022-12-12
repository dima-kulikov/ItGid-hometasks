import './App.css';
import React, { useState, useEffect } from 'react';



function App() {


  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [t3, setT3] = useState('');
  const [t4, setT4] = useState('');
  const [t5, setT5] = useState('');

  function task1 () {
    fetch('http://unit14.ua/api.php', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-from-urlencoded',
      },
      body: JSON.stringify({action: 1})
    })
    .then (response => response.text())
    .then (data => setT1(data))
  }

  function task2 (event) {
    event.preventDefault();
    let num1 = event.target.num1.value;
    let num2 = event.target.num2.value;

    fetch('http://unit14.ua/api.php', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-from-urlencoded',
      },
      body: JSON.stringify({
        action: 2,
        num1: num1,
        num2: num2
      })
    })
    .then (response => response.text())
    .then (data => setT2(data))
  }

  function task3 (event) {
    event.preventDefault();
    let filename = event.target.filename.value;
    let filedata = event.target.filedata.value;

    fetch('http://unit14.ua/api.php', {
      method: 'POST',
      header:{
        'Content-Type': 'application/x-www-from-urlencoded',
      },
      body:  JSON.stringify({
        action: 3,
        filename: filename,
        filedata: filedata
      })
    })
      .then( data => data.text())
      .then(data => setT3(data));

      if( t3 === '0') {
        setT3(false)
        alert('seee')
      }else{
        setT3(filename)
      }
  }

  function task4(event) {
    event.preventDefault();
    fetch('http://unit14.ua/api.php', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-from-urlencoded',
      },
      body: JSON.stringify({action: 4})
    })
    .then (response => response.text())
    .then (data => setT4(data))
  }

  function task5(event) {
    event.preventDefault();
    fetch('http://unit14.ua/api.php', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-from-urlencoded',
      },
      body: JSON.stringify({action: 5})
    })
    .then (response => response.json())
    .then (data => setT5(data))
  }

  useEffect(() => {
    // function myFile() {
    //   if(t3 === false){
    //     return ' ';
    //   }else{
    //     return `<a href='sss'>`
    //   }
    // }
  });

  return (
    <div>
      <h1>ItGid.info</h1>
      {/* <p>{text}</p> */}
      <hr/>
      <div>
        <h2>Время сервера</h2>
        <button onClick = {task1}>GET</button>
        <p>{t1}</p>
      </div>
      <hr/>
      <div>
      <h2>Случайное число между</h2>
        <form action="" onSubmit = {task2}>
          <div><input type="number" name="num1" defaultValue="30"/></div>
          <div><input type="number" name="num2" defaultValue="44"/></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{t2}</p>
      </div>
      <hr/>
      <div>
      <h2>Создание файла</h2>
        <form action="" onSubmit = {task3}>
          <div><input type="text" name="filename"/></div>
          <div><input type="text" name="filedata" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{t3}</p>
        {/* <p>{myFile}</p> */}
      </div>
      <hr/>
      <div>
      <h2>Получение данных компьютера</h2>
        <form action="" onSubmit = {task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{t4} </p>
      <hr/>
      <div>
      <h2>Получение курса валют</h2>
        <form action="" onSubmit = {task5}>
          <button type="sumbit">Push</button>
        </form>
          <ul>{Object.keys(t5).map(item => ( <li key={item}> {t5[item].ccy} -  {t5[item].sale}</li> ))}</ul>
      </div>
    </div>
    </div>
  );
}

export default App;

