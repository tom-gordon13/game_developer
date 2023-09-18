import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from "react"
import { getUser } from "../../utilities/users-service"
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage"
import AuthPage from '../AuthPage/AuthPage';
import MainContent from '../MainContent/MainContent';
import NavBar from '../../components/NavBar/NavBar';

const appStyle = {
  display: 'flex',
  flexDirection: 'column', // Ensures that the children are stacked vertically
  justifyContent: 'center', // Centers children vertically
  alignItems: 'center', // Centers children horizontally
  height: '100vh', // Viewport height, ensures that the app covers the full height of the viewport
  width: '100%', // Optional, covers the full width
};



function App() {
  const [user, setUser] = useState(getUser())
  const [currString, setCurrString] = useState('')
  const [guessList, setGuessList] = useState(['porch'])


  return (
    <main className="App" style={appStyle}>
      {user ?
        <>
          <NavBar user={user} />
          <MainContent guessList={guessList} />

        </>
        :
        <AuthPage setUser={setUser} />}

    </main>
  );
}

export default App;
