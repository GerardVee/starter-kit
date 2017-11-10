import React from 'react';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

export default class App extends React.Component
{
    render()
    {
        if (process.env.agent === 'SERVER' && typeof window === 'undefined')
        {
            const { location, context, store } = this.props;
            return (
                <Provider store={ store }>
                    <StaticRouter location={ location } context={ context }>
                        <Routes/>
                    </StaticRouter>
                </Provider>
            );
        }
        const { store } = this.props;
        const forceRefresh = !('pushState' in window.history);
        return (
            <Provider store={ store }>
                <BrowserRouter forceRefresh={ forceRefresh }>
                    <Routes store={ store }/>
                </BrowserRouter>
            </Provider>
        );
    }
}
