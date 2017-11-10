import fetchMock from 'fetch-mock';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Body from '../src/organisms/Body';
import { retrieveContents } from '../src/ducks/contents';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Body', () =>
{
    afterEach(() =>
    {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('renders nothing if it receives either no comments or no contents', () =>
    {
        const contents = [];
        const comments = [];

        fetchMock.getOnce(`http://localhost:${ process.env.PORT_ADDR }/contents`, { body: contents, headers: { 'content-type': 'application/json' } });
        fetchMock.getOnce(`http://localhost:${ process.env.PORT_ADDR }/comments`, { body: comments, headers: { 'content-type': 'application/json' } });        
        
        const store = mockStore({ contents: { contents: [] }, comments: { comments: []} });
        const wrapper = mount(<StaticRouter location={ '/' } context={ {} }><Body store={ store }/></StaticRouter>);
        expect(wrapper.children().children().find('button')).not.toHaveLength(1);
        expect(wrapper.children().children().find('button')).toHaveLength(0);        
    });

    it('renders nothing if it receives either no comments or no contents', () =>
    {
        const contents =
        [
            {
                "id": 1,
                "title": "Demo App",
                "body": "Click on a button and load the desired comment!"
            }
        ];
        const comments =
        [
            {
                "id": 1,
                "body": "I enjoy not running tests.",
                "postId": 1
            }
        ];

        fetchMock.getOnce(`http://localhost:${ process.env.PORT_ADDR }/contents`, { body: contents, headers: { 'content-type': 'application/json' } });
        fetchMock.getOnce(`http://localhost:${ process.env.PORT_ADDR }/comments`, { body: comments, headers: { 'content-type': 'application/json' } });   
        
        const store = mockStore({ contents: { contents }, comments: { comments } });
        const wrapper = mount(<StaticRouter location={ '/' } context={ {} }><Body store={ store }/></StaticRouter>);
        expect(wrapper.children().children().find('button')).toHaveLength(1);
    });
})