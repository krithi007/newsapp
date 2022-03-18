import React from "react";
import '../styles/posts.css'
import API_ENDPOINTS from '../services/service-endpoints.ts'

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isDataLoaded: false,
            heading: 'All articles published by the Wall Street Journal in the last 6 months, sorted by recent first'
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    async getPosts() {
        const res = await fetch(API_ENDPOINTS.getPosts);
        const data = await res.json();
        this.setState({
            posts: data, isDataLoaded: true
        });
    }
    static rendePost(posts) {
        return (
            <div>
                {posts.articles.map((post, index) => <div className='post-container' key={index}>
                    <div>
                        <img src={post.urlToImage} alt='post_image' />
                    </div>
                    <div>
                    <p>{post.title}</p>
                    <p  dangerouslySetInnerHTML={{ __html: post.description}}></p>
                    <a href={post.url} target='_blank'>{post.url}</a>
                    </div>
                    </div>
                    )
                    }
                   
            </div>
        );
    }

    render() {
        const isLoaded = this.state.isDataLoaded;
        const posts = this.state.posts;
        let content = (!isLoaded ? <span>Loading ....</span> :
            <div>
                {Posts.rendePost(posts)}
            </div>)


        return (
            <div>
                <h2>{this.state.heading}</h2>

                {content}
            </div>
        )
    }
}