import { Component, OnInit } from '@angular/core';
import { Trainings } from '../trainings';
import { TrainerserviceService } from '../trainerservice.service';

@Component({
  selector: 'app-trainercompleted',
  templateUrl: './trainercompleted.component.html',
  styleUrls: ['./trainercompleted.component.css']
})
export class TrainercompletedComponent implements OnInit {

  id: Number;
  trainings:Trainings[]=[];
  constructor(private trainerService:TrainerserviceService) { }

  ngOnInit() {
    this.id=Number(localStorage.getItem('mentorId'));
    this.trainerService.getCompletedTrainings(this.id).subscribe(data => {
      this.trainings = data;
      console.log(this.id);
    })
  }

}
