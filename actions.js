export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: 'comment',
    }
}

function editComment(id, newText) {
    return {
        type: EDIT_COMMENT,
        id: 10,
        text: 'newText'
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: 10
    }
}

function thumbUpComment(id, votes){
    return {
        type: THUMB_UP_COMMENT,
        id: 10,
        votes: votes++
    }
}

function thumbDownComment(id, votes){
    return {
        type: THUMB_DOWN_COMMENT,
        id: 10,
        votes: votes--
    }
}
const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, newText) => dispatch(editComment(id, newText));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = (id, votes) => dispatch(thumbUpComment(id, votes));
const boundThumbDownComment = (id, votes) => dispatch(thumbDownComment(id, votes));