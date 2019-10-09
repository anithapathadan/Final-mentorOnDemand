import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../traineeservice.service';
import { Trainings } from '../trainings';

@Component({
  selector: 'app-traineecurrent',
  templateUrl: './traineecurrent.component.html',
  styleUrls: ['./traineecurrent.component.css']
})
export class TraineecurrentComponent implements OnInit {

  id: Number;
  trainings:Trainings[]=[];
  constructor(private traineeService :TraineeserviceService) { }

  ngOnInit() {
    this.id=Number(localStorage.getItem('userId'));
    this.traineeService.getCurrentTrainings(this.id).subscribe(data => {
      this.trainings = data;
      console.log(this.id);
    })
  }

}
