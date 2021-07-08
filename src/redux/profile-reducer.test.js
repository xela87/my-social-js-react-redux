import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Hi', like: 24},
        {id: 2, message: 'How are you?', like: 12},
        {id: 3, message: 'Whats up?', like: 456},
        {id: 4, message: 'Bye', like: 78},
        {id: 5, message: 'Good', like: 22},
    ],
};

test('new post should be incremented', () => {
    let actionAC = addPostActionCreator("Haven and hell")
    let newState = profileReducer(state, actionAC)
    expect(newState.posts.length).toBe(6)

});
test('new post text should be correct', () => {
    let actionAC = addPostActionCreator("Haven and hell")
    let newState = profileReducer(state, actionAC)
    expect(newState.posts[5].message).toBe("Haven and hell")
});
test('after deleting length of messages should be decrement', () => {
    let actionAC = deletePost(1)
    let newState = profileReducer(state, actionAC)
    expect(newState.posts.length).toBe(4)
});

test(`after deleting length of messages shouldn't be decrement if ID incorrect`, () => {
    let actionAC = deletePost(198)
    let newState = profileReducer(state, actionAC)
    expect(newState.posts.length).toBe(5)
});
