// import all named exports
import * as usersAPI from "./users-api"
// import { getUser } from "../pages/App/App"

export async function signUp(userData) {
    // Delegate the network/AJAX request code to the users-api.js
    // which will ultimately return a JSON Web Token (JWT)

    const token = await usersAPI.signUp(userData);

    // Persist the token
    localStorage.setItem('token', token)
    return getUser();

}

export function getToken() {

    // Parsing document.cookie to get the token
    const cookies = document.cookie.split(';');

    let token = null;

    // cookies.forEach(cookie => {
    //     let [name, value] = cookie.split('=');
    //     name = name.trim();
    //     if (name === 'token') {
    //         token = value;
    //     }
    // });



    if (!token) return null

    // obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]))

    // A JWT exp is expressed in seconds, not miliseconds
    if (payload.exp < Date.now() / 1000) {
        // Token has expired - remove from localStorage
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return null
    }
    return token;
}

export function getUser() {
    // let myVar = false

    // // const token = usersAPI.fetchToken()
    // const token = getToken();

    // // If there's a token, return the user in the payload
    // return token ? JSON.parse(atob(token.split('.')[1])).user : null;

    let user = null;

    usersAPI.fetchToken()
        .then(token => {
            if (token) {

                user = JSON.parse(atob(token['token'].split('.')[1])).user;
                return user
            } else {
                return null
            }
        })
        .catch(err => console.error(err));
    console.log('User', user)
    return user;

}

export function logOut() {
    localStorage.removeItem('token')
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);

    // localStorage.setItem('token', token)
    return getUser();
}

export async function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr))
}