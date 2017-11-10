import 'isomorphic-fetch';

const RETRIEVE = 'site/comments/RETRIEVE';
const RECEIVE = 'site/comments/RECEIVE';
const TOGGLE = 'site/comments/TOGGLE';

export function retrieveComments()
{
    return (dispatch) =>
    {
        if (process.env.agent === 'SERVER' || process.env.agent === 'TEST')
        {
            dispatch(getComments());
            return fetch(`http://localhost:${ process.env.PORT_ADDR }/comments`).then((response) => response.json(), error => console.log('error: ', error)).then((comments) =>
            {
                dispatch(receiveComments(comments));
            });
        }
        else
        {
            dispatch(getComments());
            return fetch(`${ process.env.BASE_URL }comments`).then((response) => response.json(), error => console.log('error: ', error)).then((comments) =>
            {
                dispatch(receiveComments(comments));
            });
        }
    };
}

export const CommentsReducer = (state = {}, action = {}) =>
{
    switch (action.type)
    {
        case RETRIEVE:
            return state;
        case RECEIVE:
            return { ...action.comments, comments: action.comments.comments.map((comment) => ({ ...comment, visible: false })) };
        case TOGGLE:
            return { ...state, comments: state.comments.map((comment) => ({ ...comment, visible: comment.id === action.id ? !comment.visible : comment.visible })) };
    }
    return state;
};

export const toggleComment = (id) => ({ type: TOGGLE, id });
const receiveComments = (comments) => ({ type: RECEIVE, comments });
const getComments = () => ({ type: RETRIEVE });
