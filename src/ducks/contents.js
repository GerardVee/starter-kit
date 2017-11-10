import 'isomorphic-fetch';

const RETRIEVE = 'site/contents/RETRIEVE';
const RECEIVE = 'site/contents/RECEIVE';

export function retrieveContents()
{
    return (dispatch) =>
    {
        if (process.env.agent === 'SERVER' || process.env.agent === 'TEST')
        {
            dispatch(getContents());
            return fetch(`http://localhost:${ process.env.PORT_ADDR }/contents`).then((response) => response.json(), error => console.log('error: ', error)).then((contents) =>
            {
                dispatch(receiveContents(contents));
            });
        }
        else
        {
            dispatch(getContents());
            return fetch(`${ process.env.BASE_URL }contents`).then((response) => response.json(), error => console.log('error: ', error)).then((contents) =>
            {
                dispatch(receiveContents(contents));
            });
        }
    };
}

export const ContentsReducer = (state = [], action = {}) =>
{
    switch (action.type)
    {
        case RETRIEVE:
            return state;
        case RECEIVE:
            return action.contents;
    }
    return state;
};

const receiveContents = (contents) => ({ type: RECEIVE, contents });
const getContents = () => ({ type: RETRIEVE });
