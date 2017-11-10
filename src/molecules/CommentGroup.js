import * as React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';

const CommentGroup = ({ comments, className }) => (
    <div className={ `row ${ className }` }>
        { comments.map((comment) =>
            <div className={ `col-sm-${ 12 / comments.length } center` } key={ `comment-${ comment.id }` }>
                { comment.visible &&
                    <Text shade='#9B30FF'>{ comment.body }</Text>
                }
            </div>)
        }
    </div>
);

export default styled(CommentGroup)`
    padding-top: 3em;
`;
