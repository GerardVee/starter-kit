import React from 'react';

export default class extends React.Component
{
    componentDidMount()
    {
        const { children: title } = this.props;
        document.title = title;
    }

    componentDidUpdate()
    {
        const { children: title } = this.props;
        document.title = title;
    }

    render()
    {
        return null;
    }
}
