import React from 'react';
import GridSingle from '../GridSingle/GridSingle';

const gridContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
};

const rowStyle = {
    display: 'flex',
    gap: '10px'
};

export default function GridMain({ guessList }) {
    const rows = 4;
    const cols = 5;
    console.log(guessList)
    return (
        <div style={gridContainerStyle}>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} style={rowStyle}>
                    {Array.from({ length: cols }).map((_, colIndex) => {

                        const word = null ? guessList.length <= rowIndex : guessList[rowIndex]
                        let letter = ''
                        if (word) {
                            letter = guessList[rowIndex][colIndex]
                        }
                        return < GridSingle key={colIndex} content={letter} />
                    })}
                </div>
            ))}
        </div>
    );
};




