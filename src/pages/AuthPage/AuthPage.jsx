import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import AuthBox from '../../components/AuthBox/AuthBox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>Sign In</h1>

            <Grid container spacing={4}>
                <Grid xs={6}>
                    <AuthBox />
                </Grid>
                <Grid xs={6}>
                    <SignUpForm setUser={setUser} />
                    <LoginForm setUser={setUser} />
                    <Button variant="contained">Continue as Guest</Button>
                </Grid>


            </Grid>
        </main>
    );
}