import React from 'react';
import { shallow, mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';
import 'styled-components-test-utils/lib/jest';

import Button from '../src/atoms/Button';

/*
 * for styled-components components, we use expect(wrapper).toHaveStyleRule(property, value)
 * for regular components, we use expect(wrapper.childAt(0).find({ style: { property: value } })).toHaveLength(1)
 */

test('Button has default styles', () =>
{
    const wrapper = shallow(<Button/>);
    expect(wrapper).toHaveStyleRule('background-color', '#001F3F');
    expect(wrapper).toHaveStyleRule('color', 'white');
    expect(wrapper).toHaveStyleRule('border-color', 'black');
});

test('Button can have different colors', () =>
{
    const wrapper = shallow(<Button fill='aqua' shade='green' stroke='yellow'/>);
    expect(wrapper).toHaveStyleRule('background-color', 'aqua');
    expect(wrapper).toHaveStyleRule('color', 'green');
    expect(wrapper).toHaveStyleRule('border-color', 'yellow');
});

test('Button can have no color', () =>
{
    const wrapper = shallow(<Button fill='none' shade='none' stroke='none'/>);
    expect(wrapper).toHaveStyleRule('background-color', 'transparent');
    expect(wrapper).toHaveStyleRule('color', 'transparent');
    expect(wrapper).toHaveStyleRule('border-color', 'transparent');
});

test('Button can be bold or stretched or have smaller text', () =>
{
    const wrapper = shallow(<Button bold stretch focus='secondary'/>);
    expect(wrapper).toHaveStyleRule('font-weight', 'bold');
    expect(wrapper).toHaveStyleRule('font-size', '0.8em');
    expect(wrapper).not.toHaveStyleRule('width', '10em');
});

test('Button preserves text', () =>
{
    const wrapper = shallow(<Button>Hamilton</Button>);
    expect(wrapper.childAt(0).text()).toEqual('Hamilton');
});

test('clicking a "to" Button causes change in routes', () =>
{
    const wrapper = mount(<StaticRouter location={ '/' } context={ {} }><Button to='datum'/></StaticRouter>);
    expect(wrapper.props().context).toMatchObject({});
    wrapper.childAt(0).childAt(0).simulate('click');
    expect(wrapper.props().context.action).toBe('PUSH');
    expect(wrapper.props().context.url).toBe('datum');
});

test('clicking a clickable Button causes an onClick event to be triggered', () =>
{
    let name = 'Dean';
    const wrapper = shallow(<Button onClick={ () => name = 'Castiel' }/>);
    expect(name).toEqual('Dean');
    wrapper.simulate('click');
    expect(name).toEqual('Castiel');
});
