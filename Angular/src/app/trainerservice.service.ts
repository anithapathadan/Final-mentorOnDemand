import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';
import { Trainings } from './trainings';


@Injectable({
  providedIn: 'root'
})
export class TrainerserviceService {

  private baseUrl ="http://localhost:8045/trainer/trainer/";
  constructor(private http:HttpClient) { }
  createTrainer(Trainer:Object):Observable<Object>{
    return this.http.post('http://localhost:8045/trainer/trainer/signup',Trainer);
  }

  getTrainer(username:String):Observable<Trainer>{
    return this.http.get<Trainer>(`${this.baseUrl}`+username);
  }
  getTrainers():Observable<Trainer[]>{
    return this.http.get<Trainer[]>('http://localhost:8045/trainer/trainer/all');
  }
  
  getCurrentTrainings(userid:Number):Observable<Trainings[]>{
    return this.http.get<Trainings[]>('http://localhost:8045/training/training/mentor/'+userid+'/started');
  }
  
  getCompletedTrainings(userid:Number):Observable<Trainings[]>{
    return this.http.get<Trainings[]>('http://localhost:8045/training/training/mentor/'+userid+'/completed');
  }

  getUserPayment(userid:number):Observable<Trainings[]>{
    return this.http.get<Trainings[]>('http://localhost:8045/training/training/mentor/payment'+userid+'/completed');
  }

}
