import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { retrieveContents } from '../src/ducks/contents';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('contents', () =>
{
    afterEach(() =>
    {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('create RECEIVE when fetching contents has been done', () =>
    {
        const contents =
        [
            {
                "id": 1,
                "title": "Demolition Derby",
                "body": "Crush trucks! For bucks!"
            }
        ];
        const expectedActions =
        [
            { type: 'site/contents/RETRIEVE' },
            { type: 'site/contents/RECEIVE', contents }
        ];

        fetchMock.getOnce(`http://localhost:${ process.env.PORT_ADDR }/contents`, { body: contents, headers: { 'content-type': 'application/json' } });
        
        const store = mockStore({ contents: [] });

        return store.dispatch(retrieveContents()).then(() =>
        {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
})