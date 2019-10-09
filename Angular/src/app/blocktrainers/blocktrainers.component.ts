import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { TrainerserviceService } from '../trainerservice.service';

@Component({
  selector: 'app-blocktrainers',
  templateUrl: './blocktrainers.component.html',
  styleUrls: ['./blocktrainers.component.css']
})
export class BlocktrainersComponent implements OnInit {

  trainers :Trainer[]=[];
  constructor(private traineeService : TrainerserviceService) { }

  ngOnInit() {
    this.traineeService.getTrainers().subscribe(data => {
      this.trainers = data;
      console.log(this.trainers);
    })
  }
}
