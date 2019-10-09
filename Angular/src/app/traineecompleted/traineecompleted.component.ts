import { Component, OnInit } from '@angular/core';
import { Trainings } from '../trainings';
import { TraineeserviceService } from '../traineeservice.service';

@Component({
  selector: 'app-traineecompleted',
  templateUrl: './traineecompleted.component.html',
  styleUrls: ['./traineecompleted.component.css']
})
export class TraineecompletedComponent implements OnInit {

  id: Number;
  trainings:Trainings[]=[];
  constructor(private traineeService:TraineeserviceService) { }

  ngOnInit() {

    this.id=Number(localStorage.getItem('userId'));
    this.traineeService.getCompletedTrainings(this.id).subscribe(data => {
      this.trainings = data;
      console.log(this.id);
    })
  }

}
