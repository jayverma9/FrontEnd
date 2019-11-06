import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {StuDashComponent} from './stu-dash/stu-dash.component';
import {InstructorComponent} from './instructor/instructor.component';
import {SignupComponent} from './signup/signup.component';
import {GroceryComponent} from './grocery/grocery.component';
import {StudentDashbardComponent} from './student-dashbard/student-dashbard.component';
import {NewRecipeComponent} from './instructor-newrecipe/new-recipe.component';
import {SelectItemsModalComponent} from './grocery-store-modals/select-items-modal.component';



const routes: Routes = [

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
