import React from 'react';
import ReactDOM from 'react-dom';

const jsxElement = <h1>This is a JSX Element</h1>;
const rootElement = document.getElementById('root');

const title = <h2>Getting Started React</h2>;

const header = (
  <header>
    <h1>Welcome to 30 Days React</h1>
    <h2>Getting Started React</h2>
    <h3>Javascript Library</h3>
  </header>
);

ReactDOM.render(header, rootElement);

