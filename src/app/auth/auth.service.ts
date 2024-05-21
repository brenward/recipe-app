import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData{
    kind:string,
    idToken:string,
    email:string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({providedIn:'root'})
export class AuthService{
    url: string = '';
    constructor(private http:HttpClient){}
    
    signup(email: string, password:string){
        return this.http.post<AuthResponseData>(this.url,{email:email, password:password, returnSecureToken: true});
    }
}