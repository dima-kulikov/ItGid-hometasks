import './App.css';
import React from 'react';
// import Button from './Button';
// import PlaceholderPost from './PlaceholderPost';
// import Comment from './Comment';
// import Comment2 from './Comment2';

// Мои работы, закоментированны, чтобы небыло ошибок, раскоментировав все работает
// СДЕЛАННО ЧЕРЕЗ ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ
// import PlaceholderPostHook from './PlaceholderPostHook';
import CommentHook from './CommentHook'

// СДЕЛАННО ЧЕРЕЗ КЛАССОВЫЙ КОМПОНЕНТ
// import PlaceholderPostClass from './PlaceholderPostClass';
// import CommentClass from './CommentClass';



function App() {
  return (
    <>
      {/* <PlaceholderPost /> */}
      {/* <Comment/> */}
      {/* <Comment2/> */}
      {/* СДЕЛАННО ФУНКЦИОНАЛЬНЫЫМ */}
      {/* <PlaceholderPostHook/> */}
      <CommentHook/>


      {/* СДЕЛАННО КЛАССОМ -- ВЫВВОД СПИСКА */}
      {/* <PlaceholderPostClass/>
      <CommentClass/> */}
    </>
  );
}

export default App;
