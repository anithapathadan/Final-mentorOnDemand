import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trainer } from '../trainer';
import { TrainerserviceService } from '../trainerservice.service';


@Component({templateUrl: 'trainerlogin.component.html'})
export class TrainerloginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    trainer : Trainer =new Trainer();
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private trainerService:TrainerserviceService
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
            this.trainerService.getTrainer(this.loginForm.get('username').value).subscribe(data => {
            this.trainer = data;
                  //  console.log(this.trainer.mentorEmail);
            if(this.trainer==null){
                alert('Invalid Credentials1');
            }
            else if(this.trainer.mentorEmail==this.loginForm.get('username').value && this.trainer.password==this.loginForm.get('password').value){
                localStorage.setItem('mentorId',String(this.trainer.mentorId));
                this.router.navigateByUrl('/trainerlanding');
            }
            else{
                alert('Invalid Credentials2');
            }
        })
    }
    }
}
