import { Component, OnInit } from '@angular/core';
import { TrainerserviceService } from '../trainerservice.service';
import { Trainings } from '../trainings';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {

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
