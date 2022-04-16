import React, {Component} from 'react';

class PostDetail extends Component{

    state = {
        title: '',
        content: '',
    }

    componentDidMount(){
        // location 현재 페이지 정보
        // history 브라우저 history와 유사..
        const {location, history} = this.props;

        if(location.state === undefined){
            history.push('/');
        }

        const post = location.state.post;
        console.log("detail mount..");
        // console.log(post);
        this.setState({title: post.title, content: post.content});
    }

    // 클래스 메서드는 기본적으로 바인딩 x
    // 그러므로 호출 시 this는 undefinded
    // 생성자 바인딩 혹은 화살표 함수를  쓰면 자동 바인딩 해준다..
    onTitleChange = e => {
        // console.log(e);
        this.setState({title: e.target.value});
    }

    onContentChange = e =>{
        this.setState({content: e.target.value});
    }

    render(){
        const {location} = this.props;
        // console.log(location.state.post);
        // 새로고침시 state는 유지되지 않아 값이 없으므로 분기처리
        if(location.state){            
            return  <section className="container">
                <div className='posts'>
                <div className='post'>
                    {/*  react 인풋값 변경은 props나 state 값을 바인딩하여 render 함수를 통해 업데이트 해야 함.. */}
                    <h3>title</h3> <input name="title" value={this.state.title} onChange={this.onTitleChange}></input>
                    <h2>content</h2> <input name="content" value={this.state.content} onChange={this.onContentChange}></input>
                </div>
                </div>
                </section>
        }        
        return null;
    }
}

export default PostDetail;