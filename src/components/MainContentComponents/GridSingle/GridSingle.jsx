import React from 'react';

const squareStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#D3D3D3',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default function GraySingle({ content }) {
    return <div style={squareStyle}>{content}</div>;
};

