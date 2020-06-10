import ReactDom from 'react-dom';
import * as React from 'react';

const App = (props) => {
    return (
        <div>
            react Test
        </div>
    );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
    ReactDom.render(<App />, reactRoot);
} else {
    console.log('root element not found')
}