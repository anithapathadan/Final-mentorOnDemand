import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpagebodyComponent } from './firstpagebody/firstpagebody.component';
import { TeamComponent } from './team/team.component';
import { TraineelandingComponent } from './traineelanding/traineelanding.component';
import { TrainerlandingComponent } from './trainerlanding/trainerlanding.component';
import { TraineecompletedComponent } from './traineecompleted/traineecompleted.component';
import { TraineecurrentComponent } from './traineecurrent/traineecurrent.component';
import { SearchtabComponent } from './searchtab/searchtab.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TraineeheaderComponent } from './traineeheader/traineeheader.component';
import { TrainerheaderComponent } from './trainerheader/trainerheader.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { EdittechnologiesComponent } from './edittechnologies/edittechnologies.component';
import { BlockusersComponent } from './blockusers/blockusers.component';
import { BlocktrainersComponent } from './blocktrainers/blocktrainers.component';
import { MainsearchComponent } from './mainsearch/mainsearch.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { AiComponent } from './ai/ai.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstpagebodyComponent,
    TeamComponent,
    TraineelandingComponent,
    TrainerlandingComponent,
    TraineecompletedComponent,
    TraineecurrentComponent,
    SearchtabComponent,
    AboutusComponent,
    PaymenthistoryComponent,
    EditskillsComponent,
    LoginComponent,
    RegisterComponent,
    TraineeheaderComponent,
    TrainerheaderComponent,
    TrainerregisterComponent,
    AdminlandingComponent,
    AdminloginComponent,
    AdminheaderComponent,
    EdittechnologiesComponent,
    BlockusersComponent,
    BlocktrainersComponent,
    MainsearchComponent,
    TrainercurrentComponent,
    TrainercompletedComponent,
    TrainerloginComponent,
    AiComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
