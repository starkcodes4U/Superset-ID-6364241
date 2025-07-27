import React from 'react';
import Post from './Posts';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetch data from API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error("Fetch error:", error);
        this.setState({ hasError: true });
      });
  };

  // Lifecycle hook - Called once after component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // Lifecycle hook - Called if any error is thrown
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
