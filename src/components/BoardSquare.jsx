import React from 'react'
import { useDrop } from 'react-dnd'
import { moveKnight, canMoveKnight } from '../Game'
import { ItemTypes } from '../ItemTypes'
import Square from './Square'
import Overlay from './Overlay'

const boardSquareStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
}

// const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     height: '100%',
//     width: '100%',
//     zIndex: 1,
//     opacity: 0.5,
//     backgroundColor: 'yellow',
// }

const BoardSquare = ({ x, y, children }) => {
    const black = (x + y) % 2 === 1
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(x, y),
        canDrop: () => canMoveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })

    return (
        <div
            ref={drop}
            style={boardSquareStyle}
        >
            {/* {isOver && (<div style={overlayStyle} />)} */}
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && (<Overlay color='red' />)}
            {!isOver && canDrop && (<Overlay color='yellow' />)}
            {isOver && canDrop && (<Overlay color='green' />)}
        </div>
    )
}

export default BoardSquare