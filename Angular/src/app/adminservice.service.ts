import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Trainee } from './trainee';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private baseUrl ="http://localhost:8045/admin/admin/";
  constructor(private http:HttpClient) { }
  getAdmin(username:String):Observable<Admin>{
    return this.http.get<Admin>(`${this.baseUrl}`+username);
  }

}
