import React from 'react';
import ReactDOM from 'react-dom/client';
import ListGroup from "./components/ListGroup";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListGroup>
        <p>one</p>
        <p>two</p>
    </ListGroup>
  </React.StrictMode>
);