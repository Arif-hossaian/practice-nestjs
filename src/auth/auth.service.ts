/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    singup(){
        return {message:'Hello from sign up'}
    }
    singin(){
        return {message: 'Hello from sign in'}
    }
}