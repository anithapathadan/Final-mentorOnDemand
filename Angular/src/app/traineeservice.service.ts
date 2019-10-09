import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainee } from './trainee';
import { Trainings } from './trainings';

@Injectable({
  providedIn: 'root'
})
export class TraineeserviceService {

  private baseUrl ="http://localhost:8045/trainee/trainee/";
  constructor(private http:HttpClient) { }
  createTrainee(Trainee:Object):Observable<Object>{
    return this.http.post('http://localhost:8045/trainee/trainee/signup',Trainee);
}
getTrainee(username:String):Observable<Trainee>{
  return this.http.get<Trainee>(`${this.baseUrl}`+username);
}

getTrainees():Observable<Trainee[]>{
  return this.http.get<Trainee[]>('http://localhost:8045/trainee/trainee/all');
}

getCurrentTrainings(userid:Number):Observable<Trainings[]>{
  return this.http.get<Trainings[]>('http://localhost:8045/training/training/user/'+userid+'/started');
}

getCompletedTrainings(userid:Number):Observable<Trainings[]>{
  return this.http.get<Trainings[]>('http://localhost:8045/training/training/user/'+userid+'/completed');
}
}
