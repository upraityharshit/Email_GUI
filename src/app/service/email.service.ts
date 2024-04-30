import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl:string="https://emailapi-backend.onrender.com";

  constructor(private http:HttpClient) { }
  
  sendEmail(data:any){
    return this.http.post(`${this.baseUrl}/sendemail`, data);
  }
  
}
