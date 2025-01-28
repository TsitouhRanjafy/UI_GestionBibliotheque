export type typeForLogin = {
    email: string,
    password: string
} 

export type typeForLogedUser = {
    status: string,
    id: string,
    token: string
}

export type typeForSignup = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export type typeForSignupUser = {
    status: string,
    message: string,
    id: string,
}

export interface User {
    id: string,
    firstname: string;
    lastname: string;
    email: string;
}