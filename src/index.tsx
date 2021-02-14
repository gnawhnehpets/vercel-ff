import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Todo: for logout functionality, we need to empty the cache once logout mutation called. 
// Apollo Client deals with this. FUll Stack Vid @ 3:45:00-ish
const client = new ApolloClient({
    uri: 'http://localhost:4332/graphql',
    cache: new InMemoryCache(),
    credentials: 'include',
    
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();