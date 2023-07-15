import * as React from 'react';
import AuthBox from '@mui/material/Box';


export default function BoxSx() {
    return (
        <AuthBox
            sx={{
                width: '60%',
                height: '80%',
                display: 'flex',
                margin: '10%',
                backgroundColor: 'primary.dark',
                // '&:hover': {
                //     backgroundColor: 'primary.main',
                //     opacity: [0.9, 0.8, 0.7],
                // },
            }}
        />
    );
}