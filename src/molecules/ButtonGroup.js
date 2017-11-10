import * as React from 'react';
import styled from 'styled-components';

import { media } from '../_helpers/media';
import Button from '../atoms/Button';

const ButtonGroup = ({ comments, toggleComment, className }) => (
    <div className={ `row ${ className }` }>
        { comments.map((comment) =>
            <div className={ `col-sm-${ 12 / comments.length } center` } key={ `button-${ comment.id }` }>
                <Button bold stroke='#9B30FF' shade='#7F00FF' fill='none' onClick={ () => toggleComment(comment.id) }>Comment { comment.id }</Button>
            </div>)
        }
    </div>
);

export default styled(ButtonGroup)`
    ${ media.small`
        > div > button {
            width: 100%;
        }
    ` }
    ${ media.medium`
        > div > button {
            width: 10em;
        }
    ` }
    ${ media.large`
        > div > button {
            width: 10em;
        }
    ` }

`;
