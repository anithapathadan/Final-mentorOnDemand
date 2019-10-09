import { Component, OnInit } from '@angular/core';
import { Trainings } from '../trainings';
import { TrainerserviceService } from '../trainerservice.service';

@Component({
  selector: 'app-trainercurrent',
  templateUrl: './trainercurrent.component.html',
  styleUrls: ['./trainercurrent.component.css']
})
export class TrainercurrentComponent implements OnInit {

  id: Number;
  trainings:Trainings[]=[];
  constructor(private trainerService:TrainerserviceService) { }

  ngOnInit() {

    this.id=Number(localStorage.getItem('mentorId'));
    this.trainerService.getCurrentTrainings(this.id).subscribe(data => {
      this.trainings = data;
      console.log(this.id);
    })
  }

}
