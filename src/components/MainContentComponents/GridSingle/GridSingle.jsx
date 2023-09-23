import React from 'react';

const squareStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#968c84',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default function GraySingle({ content }) {
    return <div style={squareStyle}>{content}</div>;
};

