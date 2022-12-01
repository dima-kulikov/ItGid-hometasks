import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  let inputValue = React.createRef('');
  const [out7, setOut7] = useState([])

//task-2
const h1 = React.createElement('h1', {}, 'unit_08');

// task-3
const h2 = React.createElement('h2',{
  'className': 'text-orange'
},"header 2");

//task-4
const p = React.createElement('p', {
  'style': {
    'color': 'red'
},}, "this is p");

//task-5
const input = React.createElement('input',{'value': 55},);

//task-6
const p1 = React.createElement('p',{}, 'hi');
const p2 = React.createElement('p',{}, 'world');
const div = React.createElement('div',{
  'className': 'text-grey'
}, p1, p2);

//task-7
const input7 = React.createElement('input',{
  'ref': inputValue
},);
const btn = React.createElement('button',{
  onClick: ()=>{
    let out = inputValue.current.value;
    if(out === ''){
     return
    }else{
     let myList = [...out7, out];
     setOut7( myList.map((item, index) => {
     return <li key='item + index'>{item}</li>
     
    }))
    inputValue.current.value = '';
    }
  }
},'button');


  return (
   <>
   {h1}
   {h2}
   {p}
   {div}
   {input}
   {/* task-7 ниже весь код */}
   <div>
   {input7}
   {btn}
   <ul>{out7}</ul>
   </div>
   </>
  );
}

export default App;
