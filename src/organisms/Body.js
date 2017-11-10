import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

import Button from '../atoms/Button';
import Header from '../molecules/Header';
import ButtonGroup from '../molecules/ButtonGroup';
import CommentGroup from '../molecules/CommentGroup';
import { media } from '../_helpers/media';
import { retrieveContents } from '../ducks/contents';
import { retrieveComments, toggleComment } from '../ducks/comments';

/*
const colorCode =
{
    primary:
    {
        inline: 'bright yellow',
        outline: 'none',
        fill: 'black',
        complement:
        {
            inline: 'bright blue',
            outline: 'none',
            fill: 'soft grey'
        }
    },
    secondary:
    {
        inline: 'bright purple',
        outline: 'bright purple',
        fill: 'none',
        complement:
        {
            inline: 'bright green',
            outline: 'bright green',
            fill: 'none'
        }
    }
};
 * OR *
maybe yellow/black, organge/black; yellow/none, orange/none;
 * OR *
maybe yellow/black, purple/black; yellow/none, purple/none;
ALSO
don't forget react-color and react webgl;
primary: submit current, primary complement: delete current;
secondary: edit previous, secondary complement: delete previous;
4 color schemes, just like spotify, google, etc. all web apps do
put all your projects on github, and link back to them on gerardvee.com
additionally, put down some of your projects in your resume, and describe what you did with them, and what's so special about them
*/

class Body extends React.Component
{
    state =
    {
        shade: '#fff',
        fill: '#fff',
        stroke: '#fff'
    };

    handleChangeComplete(type, color)
    {
        this.setState({ [type]: color.hex });
    }

    componentWillMount()
    {
        this.props.getBody();
    }

    render()
    {
        const { contents: { contents }, comments: { comments }, className } = this.props;
        if (!comments || !contents)
        {
            return (
                <div className={ `container ${ className }` }>
                </div>
            );
        }
        return (
            <div className={ `container ${ className }` }>
                {/*<SketchPicker color={ this.state.fill } onChangeComplete={ (color) => this.handleChangeComplete('fill', color) }/>
                <SketchPicker color={ this.state.shade } onChangeComplete={ (color) => this.handleChangeComplete('shade', color) }/>
                <SketchPicker color={ this.state.stroke } onChangeComplete={ (color) => this.handleChangeComplete('stroke', color) }/>
                <Button bold fill={ this.state.fill } shade={ this.state.shade } stroke={ this.state.stroke }>Example</Button>*/}
                <Button bold fill='#FADA5E' shade='white' stroke='none'>Add</Button>
                <Button bold fill='none' shade='#FADA5E' stroke='#FADA5E'>Edit</Button>
                <Button bold fill='none' shade='#FADA5E' stroke='#FADA5E'>Swap</Button>
                <Button bold fill='none' shade='#9B30FF' stroke='#9B30FF'>Clear</Button>
                <Button bold fill='none' shade='#9B30FF' stroke='#9B30FF'>Remove</Button>
                <Button bold fill='#9B30FF' shade='white' stroke='none'>Delete</Button>
                <Header contents={ contents }/>
                <ButtonGroup comments={ comments } toggleComment={ (id) => this.props.toggleComment(id) }/>
                <CommentGroup comments={ comments }/>
            </div>
        );
    }
}

const mapStateToProps = ({ contents, comments }) => ({ contents, comments });

const mapDispatchToProps = (dispatch) => ({
    getBody: () => { dispatch(retrieveComments()); dispatch(retrieveContents()); },
    toggleComment: (id) => dispatch(toggleComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(styled(Body)`
    ${ media.small`
        margin-top: 1em;
    ` }
    ${ media.large`
        margin-top: 0;
    ` }
`);
