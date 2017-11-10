import React from 'react';
import { shallow, mount } from 'enzyme';

import PageTitle from '../src/atoms/PageTitle';

test('PageTitle causes a title change on mount', () =>
{
    const wrapper = mount(<PageTitle children='Demo App'/>);
    expect(document.title).toEqual('Demo App');
});