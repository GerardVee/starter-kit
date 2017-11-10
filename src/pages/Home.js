import React from 'react';
import { connect } from 'react-redux';

import Body from '../organisms/Body';
import PageTitle from '../atoms/PageTitle';

class Home extends React.Component
{
    render()
    {
        return (
            <div className='col-sm'>
                <PageTitle>Demo App</PageTitle>
                <Body/>
            </div>
        );
    }
}

export default connect()(Home);
