import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from '../molecules/Header';
import ButtonGroup from '../molecules/ButtonGroup';
import CommentGroup from '../molecules/CommentGroup';
import { media } from '../_helpers/media';
import { retrieveContents } from '../ducks/contents';
import { retrieveComments, toggleComment } from '../ducks/comments';

class Body extends React.Component
{
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
