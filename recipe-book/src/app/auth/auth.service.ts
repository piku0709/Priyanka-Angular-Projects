import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered? : boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){}
    private API_KEY = 'AIzaSyCRErsNiXj0lNzR4hd2oG39X4ptIDhYAQE';
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`, 
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        console.log(errorRes);
        let errorMessage = 'An unknown error occurred!';
        if(!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email is invalid!'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is invalid!'
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = 'This email or password is invalid!'
                break;
        }
        return throwError(errorMessage);
    }
}