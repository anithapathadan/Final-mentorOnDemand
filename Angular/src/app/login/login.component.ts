import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trainee } from '../trainee';
import { TraineeserviceService } from '../traineeservice.service';


@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    trainee: Trainee=new Trainee();
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private traineeService:TraineeserviceService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else{
            this.traineeService.getTrainee(this.loginForm.get('username').value).subscribe(data => {
            this.trainee = data;

            if(this.trainee==null){
                alert('Invalid Credentials');
            }
            else if(this.trainee.userEmail==this.loginForm.get('username').value && this.trainee.userPassword==this.loginForm.get('password').value){
                localStorage.setItem('userId',String(this.trainee.userId));
                this.router.navigateByUrl('/traineelanding');
            }
            else{
                alert('Invalid Credentials');
            }
        })
    }
    }
        
}
