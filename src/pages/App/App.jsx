import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import { getUser } from "../../utilities/users-service"
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
  const [guessList, setGuessList] = useState([])

  useEffect(() => {
    function handleKeyPress(event) {

      if (/^[a-zA-Z]$/.test(event.key) && currString.length < 5) {
        let updatedString = currString + event.key

        setCurrString(updatedString);
        if (updatedString.length === 5) {
          let newGuessList = guessList.length > 1 ? [...guessList, updatedString] : [updatedString]
          setGuessList(guessList => newGuessList);
          setCurrString('');
        } else {
          setCurrString(updatedString);
          if (guessList.length > 0) {
            let newGuessList = [...guessList];
            newGuessList[newGuessList.length - 1] = updatedString;
            setGuessList(newGuessList);
          } else {
            setGuessList([updatedString])
          }
        }
      }
    }
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [currString, guessList]);



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
