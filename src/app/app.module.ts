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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {NewRecipeComponent} from './instructor-newrecipe/new-recipe.component';
import {SelectItemsModalComponent} from './grocery-store-modals/select-items-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// @ts-ignore
const approutes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'stuDash', component: StuDashComponent},
  {path: 'instructor', component: InstructorComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'grocery', component: GroceryComponent},
  {path: 'studentDashboard', component: StudentDashbardComponent},
  {path: 'newRecipe', component: NewRecipeComponent},
  {path: 'modal', component: SelectItemsModalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StuDashComponent,
    InstructorComponent,
    SignupComponent,
    GroceryComponent,
    StudentDashbardComponent,
    NewRecipeComponent,
    SelectItemsModalComponent
  ],
  imports: [
    BrowserModule,
    // Here, our routes are registered in angular app. and RouterModule gives us this functionality.
    RouterModule.forRoot(approutes),
    DragDropModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCheckboxModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 0.1,
      backgroundPadding: -24,
      radius: 33,
      // @ts-ignore
      unitsFontWeight: 200,
      // @ts-ignore
      titleFontSize: 11,
      // @ts-ignore
      titleFontWeight: 300,
      imageHeight: 67,
      imageWidth: 30,
      animationDuration: 600
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
