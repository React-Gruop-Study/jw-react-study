import React, {Component} from 'react';
import './Home.css';

class Home extends Component{

    componentDidMount(){

        console.log("mount..");
    }

    render(){
        return(<div>Hello Home!!</div>);
    }
}

export default Home;