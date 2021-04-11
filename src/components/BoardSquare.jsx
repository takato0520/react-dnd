import React from 'react'
import { useDrop } from 'react-dnd'
import { moveKnight } from '../Game'
import { ItemTypes } from '../ItemTypes'
import Square from './Square'

const boardSquareStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
}

const BoardSquare = ({ x, y, children }) => {
    const black = (x + y) % 2 === 1
    const [, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(x, y),
    })

    return (
        <div
            ref={drop}
            style={boardSquareStyle}
        >
            <Square black={black}>{children}</Square>
        </div>
    )
}

export default BoardSquare