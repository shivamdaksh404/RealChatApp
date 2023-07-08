import { atom } from "recoil";

function getUsers(){
    let users = localStorage.getItem('userData')
    if(users){
        users = JSON.parse(users)
    }
    else {
        users = [];
    }
    return users;
}

function getCurrentUsers(){
    let users = localStorage.getItem('currentUser')
    if(users){
        users = JSON.parse(users)
    }
    else {
        users = [];
    }
    return users;
}


export const isUserLoggedIn = atom({
    key: "isUserLoggedIn",
    default: false,
})

export const registeredUser = atom({
    key: "registeredUser",
    default: getUsers() ,
})

export const currentUsers = atom({
    key: "currentUser",
    default: getCurrentUsers() 
})