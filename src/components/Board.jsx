import React from 'react'
import Square from './Square'
import Knight from './Knight'
import BoardSquare from './BoardSquare'
// import { moveKnight, canMoveKnight } from '../Game'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const boardStyle = {
    width: 500,
    height: 500,
    border: '1px solid gray',
    display: 'flex',
    flexWrap: 'wrap'
}

const squareStyle = {
    width: '12.5%', height: '12.5%'
}

const renderSquare = (i, [knightX, knightY]) => {
    const x = i % 8
    const y = Math.floor(i / 8)
    const black = (x + y) % 2 === 1
    const isKnightHere = knightX === x && knightY === y
    const piece = isKnightHere ? <Knight /> : null

    return (
        <div
            key={i}
            style={squareStyle}
        // onClick={() => handleSquareClick(x, y)}
        >
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, [knightX, knightY])}
            </BoardSquare>
            {/* <Square black={black}>{piece}</Square> */}

        </div>
    )
}


const renderPiece = (x, y, [knightX, knightY]) => {
    const isKnightHere = knightX === x && knightY === y
    return isKnightHere ? <Knight /> : null
}
// const handleSquareClick = (toX, toY) => {
//     if (canMoveKnight) {
//         moveKnight(toX, toY)
//     }
// }

const Board = ({ knightPosition }) => {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={boardStyle}>
                {/* {renderSquare(0, knightPosition)}
            {renderSquare(1, knightPosition)}
            {renderSquare(2, knightPosition)} */}
                {squares}
            </div>
        </DndProvider >
    )
}

export default Board