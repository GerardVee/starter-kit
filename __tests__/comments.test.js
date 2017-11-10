import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { retrieveComments } from '../src/ducks/comments';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('comments', () =>
{
    afterEach(() =>
    {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('create RECEIVE when fetching comments has been done', () =>
    {
        const comments =
        [
            {
                "id": 4,
                "body": "How to fly?",
                "postId": 92
            },
            {
                "id": 394,
                "body": "Are calories bad?.",
                "postId": 2934
            }
        ];
        const expectedActions =
        [
            { type: 'site/comments/RETRIEVE' },
            { type: 'site/comments/RECEIVE', comments }
        ];

        fetchMock.getOnce(`http://localhost:${ process.env.PORT_ADDR }/comments`, { body: comments, headers: { 'content-type': 'application/json' } });
        
        const store = mockStore({ comments: [] });

        return store.dispatch(retrieveComments()).then(() =>
        {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
})