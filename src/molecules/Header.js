import * as React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';
import Title from '../atoms/Title';
import { media } from '../_helpers/media';

const Header = ({ contents, className }) => (
    <div className={ `row ${ className }` }>
        { contents.map((content) => [
            <div className='col-sm-12 center' key={ `title-${ content.id }` }>
                <Title shade='#9B30FF' stroke='#912CEE' size='4x'>{ content.title }</Title>
            </div>,
            <div className='col-sm-12 center' key={ `body-${ content.id }` }>
                <Text shade='#7A378B' size='2x'>{ content.body }</Text>
            </div>])
        }
    </div>
);

export default styled(Header)`
    padding-bottom: 3em;
    >* {
        padding: 1em;
    }
    ${ media.small`
        padding-top: 6em;
    ` }
    ${ media.medium`
        padding-top: 10em;
    ` }
    ${ media.large`
        padding-top: 10em;
    ` }
`;
