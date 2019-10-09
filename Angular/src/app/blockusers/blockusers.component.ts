import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { TraineeserviceService } from '../traineeservice.service';

@Component({
  selector: 'app-blockusers',
  templateUrl: './blockusers.component.html',
  styleUrls: ['./blockusers.component.css']
})
export class BlockusersComponent implements OnInit {

  trainees :Trainee[]=[];
  constructor(private traineeService : TraineeserviceService) { }

  ngOnInit() {
    this.traineeService.getTrainees().subscribe(data => {
      this.trainees = data;
      console.log(this.trainees);
    })
  }

}
