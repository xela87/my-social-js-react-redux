import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsArray = props.posts.map((post) => <Post message={post.message} like={post.like} />);
  let textArea = React.createRef();
  const newButtonElement = React.createRef();
  const takePost = ()=> {
    props.addPost();
  };
  const onPostChange = () => {
    let text = textArea.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div>
      <h2>My Posts</h2>
      <div>{postsArray}</div>
      <div>
        <div>
          <textarea ref={textArea} onChange={onPostChange} />
        </div>
        <div>
          <button ref={newButtonElement} onClick={takePost}>
            Add post
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
