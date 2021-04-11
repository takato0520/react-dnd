import { useDrag } from 'react-dnd'
import { ItemTypes } from '../ItemTypes'
import React from 'react'

const knightStyle = {
    fontSize: 60,
    textAlign: 'center',
    lineHeight: '4rem',
    fontWeight: 'bold',
    cursor: 'move',
}

const Knight = () => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.KNIGHT,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <div
            ref={drag}
            style={{
                ...knightStyle,
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            ♘
        </div>
    )
}

export default Knight