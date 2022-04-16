import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    
    return (
        <div className="nav">
            {/* a링크는 페이지 새로고침하지만 리액트의 link컴포넌트를 사용하면 새로고침 안함 */}
            <Link to="/">Home</Link>
            <Link to="/post">Post</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;