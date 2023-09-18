import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import GridMain from '../../components/MainContentComponents/GridMain/GridMain';



const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Starts contents at the top
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    paddingTop: '20%', // 1/3 of the height to push contents to start 2/3 of the way down
}

export default function MainContent({ guessList }) {
    return (

        <container style={containerStyle}>
            <GridMain guessList={guessList}>

            </GridMain>
        </container>
    );
}