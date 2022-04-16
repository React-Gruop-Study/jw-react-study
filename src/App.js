import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Post from './routes/Post';
import PostDetail from './routes/PostDetail';
import About from './routes/About';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>

    {/* 인라인으로 component를 쓰게 되면 의도히지 않는 마운트/언마운트 유발하기 때문에
    컴포넌트에 지역 변수를 넘겨주고자 할 때 render를 사용하거나 children prop를 사용하는 것 권장함 */}
    <Route path="/" exact = {true} component={Home}/> 
    <Route path="/post" component={Post}/>
    <Route path="/post-detail" component={PostDetail}/>
    <Route path="/about" component={About}/>
    <Redirect path="*" to="/"/>
    </BrowserRouter>
  );
}

export default App;
