import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StuDashComponent } from './stu-dash/stu-dash.component';
import { InstructorComponent } from './instructor/instructor.component';
import { SignupComponent } from './signup/signup.component';
import {Routes, RouterModule} from '@angular/router';
import { GroceryComponent } from './grocery/grocery.component';
import { StudentDashbardComponent } from './student-dashbard/student-dashbard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule, MatExpansionModule, MatFormFieldModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// @ts-ignore
const approutes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'stuDash', component: StuDashComponent},
  {path: 'instructor', component: InstructorComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'grocery', component: GroceryComponent},
  {path: 'studentDashboard', component: StudentDashbardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StuDashComponent,
    InstructorComponent,
    SignupComponent,
    GroceryComponent,
    StudentDashbardComponent
  ],
  imports: [
    BrowserModule,
    // Here, our routes are registered in angular app. and RouterModule gives us this functionality.
    RouterModule.forRoot(approutes),
    DragDropModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
