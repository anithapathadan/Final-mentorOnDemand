import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trainee } from '../trainee';
import {  TraineeserviceService } from '../traineeservice.service';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private traineeService:TraineeserviceService
    ) { }
   
 trainee:Trainee = new Trainee();
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.trainee.userFirstName=this.registerForm.get('firstName').value;
        this.trainee.userEmail=this.registerForm.get('username').value;
        this.trainee.userPassword=this.registerForm.get('password').value;
       
        this.traineeService.createTrainee(this.trainee).subscribe(data => console.log(data),error => console.log(error));
        
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.router.navigateByUrl('/traineelanding');
        
    }
}
