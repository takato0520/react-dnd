import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import Knight from './components/Knight'
// import Square from './components/Square';
import Board from './components/Board'
import { observe } from './Game'

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     // <Square black={true}>
//     //     <Knight />
//     // </Square >,
//     <Board knightPosition={[1, 0]} />,
//     document.getElementById('root'));

const root = document.getElementById('root')
observe(knightPosition => ReactDOM.render(<Board knightPosition={knightPosition} />
    , root)
)