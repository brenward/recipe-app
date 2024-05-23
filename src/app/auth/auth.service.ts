import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData{
    kind:string,
    idToken:string,
    email:string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?:boolean
}

@Injectable({providedIn:'root'})
export class AuthService{
    user = new Subject<User>();
    url: string = '';
    loginUrl: string = '';

    constructor(private http:HttpClient){}
    
    signup(email: string, password:string){
        return this.http.post<AuthResponseData>(this.url,{email:email, password:password, returnSecureToken: true})
        .pipe(
            catchError(this.handleError), 
            tap(resData => 
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            )
        );
    }

    login(email: string, password:string){
        return this.http.post<AuthResponseData>(this.loginUrl, {email:email, password:password, returnSecureToken: true})
        .pipe(
            catchError(this.handleError), 
            tap(resData => 
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            )
        );
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occurred';
        console.log(errorRes);
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct';
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = 'This password is not correct';
                break;

        }
        return throwError(errorMessage);
    }

    private handleAuthentication(email:string,userId:string, token:string, expiresIn:number){
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }
}