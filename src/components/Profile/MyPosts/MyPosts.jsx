import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10)

const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength]} placeholder={'Enter your post'}
                       component={TextArea} name={"post"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewReduxPost = reduxForm({form: 'post'})(NewPost)

const MyPosts = (props) => {
    const onAddPost = (formData) => {
        props.addPost(formData.post)
    }
    const postsArray = props.posts.map((post) => <Post key={post.id} message={post.message} like={post.like}/>);
    return (
        <div>
            <h2>My Posts</h2>
            <div>{postsArray}</div>
            <NewReduxPost onSubmit={onAddPost}/>
        </div>
    );
};

export default MyPosts;
