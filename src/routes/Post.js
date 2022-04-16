import React, {Component} from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

class Post extends Component{

    constructor(props){
        super(props);
        // state 초기값 설정
        this.state={
            posts : [{id:1, title:"test title1", content:"test content1"},
                    {id:2, title:"test title2", content:"test content2"},
                    {id:3, title:"test title3", content:"test content3"},
                    {id:4, title:"test title4", content:"test content4"},
                    {id:5, title:"test title5", content:"test content5"},
                    {id:6, title:"test title6", content:"test content6"},
                    {id:7, title:"test title7", content:"test content7"}]
        }
    }

    componentDidMount(){
        console.log("post mount..");
    }

    render(){
        const posts = this.state.posts;

        console.log(posts);
        return(
        <section className="container">
        
        <div className='posts'>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <Link to={{
                        pathname: '/post-detail',
                        state: {post: post},
                    }}>
                <div className='post__data'>
                <h3 className='post__title'>{post.title}</h3>
                <h5 className='post__content'>{post.content}</h5>
                </div>
                </Link>
                </div>
            ))}
        </div>
        </section>
        );
    };

}

export default Post;

