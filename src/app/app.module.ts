import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StuDashComponent } from './stu-dash/stu-dash.component';
import { InstructorComponent } from './instructor/instructor.component';
import { SignupComponent } from './signup/signup.component';
import {Routes, RouterModule} from '@angular/router';

// @ts-ignore
const approutes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'stuDash', component: StuDashComponent},
  {path: 'instructor', component: InstructorComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StuDashComponent,
    InstructorComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    // Here, our routes are registered in angular app. and RouterModule gives us this funtionality.
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
