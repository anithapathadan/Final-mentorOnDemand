import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{TraineecurrentComponent} from './traineecurrent/traineecurrent.component'
import{TraineecompletedComponent} from './traineecompleted/traineecompleted.component';
import{TraineelandingComponent} from './traineelanding/traineelanding.component';
import{SearchtabComponent} from './searchtab/searchtab.component';
import{TeamComponent} from './team/team.component';
import{FirstpagebodyComponent} from './firstpagebody/firstpagebody.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import{TrainerlandingComponent} from './trainerlanding/trainerlanding.component';
import{PaymenthistoryComponent} from './paymenthistory/paymenthistory.component';
import{EditskillsComponent} from './editskills/editskills.component';
import{LoginComponent} from './login/login.component';
import{TrainerloginComponent} from './trainerlogin/trainerlogin.component';
import{RegisterComponent} from './register/register.component';
import{TrainerregisterComponent} from './trainerregister/trainerregister.component';
import{AdminlandingComponent} from './adminlanding/adminlanding.component';
import{AdminloginComponent} from './adminlogin/adminlogin.component';
import{EdittechnologiesComponent} from './edittechnologies/edittechnologies.component';
import{BlockusersComponent} from './blockusers/blockusers.component';
import{BlocktrainersComponent} from './blocktrainers/blocktrainers.component';
import{MainsearchComponent} from './mainsearch/mainsearch.component';
import{TrainercurrentComponent} from './trainercurrent/trainercurrent.component'
import{TrainercompletedComponent} from './trainercompleted/trainercompleted.component';
import{AiComponent} from './ai/ai.component';
import{AngularComponent} from './angular/angular.component';

const routes: Routes = [
{path:'',component:FirstpagebodyComponent},
{path:'trainercompleted' ,component:TrainercompletedComponent},
{path:'traineecompleted' ,component:TraineecompletedComponent},
{path:'traineelanding' ,component:TraineelandingComponent},
{path:'trainercurrent' ,component:TrainercurrentComponent},
{path:'traineecurrent' ,component:TraineecurrentComponent},
{path:'searchtab' , component:SearchtabComponent},
{path:'team' ,component:TeamComponent},
{path:'firstpagebody', component:FirstpagebodyComponent},
{path:'aboutus',component:AboutusComponent},
{path:'trainerlanding' ,component:TrainerlandingComponent},
{path:'paymenthistory' ,component:PaymenthistoryComponent},
{path:'editskills',component:EditskillsComponent},
{path:'login',component:LoginComponent},
{path:'register' ,component:RegisterComponent},
{path:'trainerregister' ,component:TrainerregisterComponent},
{path:'adminlanding' ,component:AdminlandingComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'edittechnologies',component:EdittechnologiesComponent},
{path:'blockusers' ,component:BlockusersComponent},
{path:'blocktrainers' , component:BlocktrainersComponent},
{path:'mainsearch',component:MainsearchComponent},
{path:'trainerlogin' ,component:TrainerloginComponent},
{path:'ai',component:AiComponent},
{path:'angular',component:AngularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
