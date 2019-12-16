import {Component, Input, OnInit} from '@angular/core';
import {Class, Ingredient, Recipe, Step, Teacher, Utensil} from '../models/app-models';
import {Subscription} from 'rxjs';
import {ApiService} from '../service/api.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {GroceryDialogContentDialogComponent} from '../grocery-dialog-content-dialog/grocery-dialog-content-dialog.component';
import {UtensilDialogContentDialogComponent} from '../utensil-dialog-content-dialog/utensil-dialog-content-dialog.component';

@Component({
  selector: 'app-edit-recipe-component',
  templateUrl: './edit-recipe-component.component.html',
  styleUrls: ['./edit-recipe-component.component.css']
})
export class EditRecipeComponentComponent implements OnInit {

  isOpen: boolean;

  @Input() teacher: Teacher;
  @Input() classs: Class;
  public selectedRecipe: Recipe;
  public teacherSubscription: Subscription;
  public selectedIngredients: Ingredient[] = [];
  public selectedUtensils: Utensil[] = [];
  public items: Object[] = [];
  public selectedFile: File = null;
  private imageString = '';

  public texts: string[] = [];
  public idOfselect = 0;
  public selected: string[] = ['Wash', 'Grate',
    'Grill', 'Melt', 'Pinch', 'Pour',
    'Simmer', 'Slice', 'Spread', 'Stir',
    'Add', 'Bake', 'Blend', 'Broil', 'Chop',
    'Dip', 'Fry'];

  private stepNum: number;
  selectedClass = 0;
  selectedClassUtensils = 0;
  imagURL: string;
  // tslint:disable-next-line:variable-name
  imageid = 0;


  constructor(private service: ApiService, public dialog: MatDialog, private router: Router, private snackbar: MatSnackBar ) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if (this.teacher == null && window.sessionStorage.getItem('user') != null) {
      console.log('in Teacher local storage');
      this.teacher = JSON.parse(window.sessionStorage.getItem('user'));
    }

    if (window.sessionStorage.getItem('selectedClass') != null) {
      console.log('FROM SESSION STORAGE');
      this.classs = JSON.parse(window.sessionStorage.getItem('selectedClass'));
    }

    if (this.selectedRecipe == null && window.sessionStorage.getItem('selectedRecipe') != null) {
      this.selectedRecipe = JSON.parse(window.sessionStorage.getItem('selectedRecipe'));
      console.log(window.sessionStorage.getItem('selectedRecipe'));
      console.log('selected Recipe', this.selectedRecipe);
    }
    if (this.selectedRecipe != null) {
      this.selectedIngredients = this.selectedRecipe.ingredients;
      this.selectedUtensils = this.selectedRecipe.utensils;
    }
  }

  ngOnInit() {
    console.log("this",this.selectedRecipe);
    this.stepNum = this.selectedRecipe.steps.length;
    this.texts[0] = this.selectedRecipe.name;
    this.texts[1] = this.selectedRecipe.description;
    this.texts[2] = this.selectedRecipe.name;
    this.imagURL = this.selectedRecipe.imagePath;
    console.log(this.selectedRecipe.imagePath);

    for (let i = 0; i < this.selectedRecipe.steps.length - 1; i++) {
        console.log('in the loop: ', this.selectedRecipe.steps);
        // document.getElementById('select' + i).textContent = this.selectedRecipe.steps[i].action;
        // document.getElementById('step' + i).innerText = this.selectedRecipe.steps[i].description;
        // document.getElementById('step' + i + i + i).innerText = this.selectedRecipe.steps[i].outcome;
        document.getElementById('imageDiv' + i).getElementsByTagName('img')[i].src =  this.selectedRecipe.steps[i].imageFile;
        this.addStep(i);
      }
    // window.sessionStorage.setItem('selectedRecipe', null);
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }


  addStep(helperInaddinfstepsonedit) {
    console.log('helperInaddinfstepsonedit: ', helperInaddinfstepsonedit);
    // console.log(this.selectedIngredients.length);
    if (this.selectedIngredients.length === 0) { this.snackbar.open( ' Select ingredients before adding steps', 'Dismiss', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});

    } else if (this.selectedUtensils.length === 0) { this.snackbar.open( ' Select utensils before adding steps', 'Dismiss', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});
    } else {

      this.stepNum += 1;

      const mainContainer = document.createElement('div');
      mainContainer.className = 'flex flex-row w-full items-center animated fadeIn mt-2';
      mainContainer.id = 'mainContainer' + this.stepNum;

      const step = document.createElement('textarea');
      step.id = 'step' + this.stepNum;
      step.className = 'resize-none p-2 border-4 hover:border-gray-600 border-gray-400';
      // step.placeholder = 'Describe Step';
      step.value = this.selectedRecipe.steps[helperInaddinfstepsonedit].description;


      const outcome = document.createElement('textarea');
      outcome.id = 'step' + this.stepNum + this.stepNum + this.stepNum;
      outcome.className = 'resize-none p-2 border-4 hover:border-gray-600 border-gray-400';
      // outcome.placeholder = 'Outcome';
      outcome.value = this.selectedRecipe.steps[helperInaddinfstepsonedit].outcome;

      // <div class="">
      const divfortexareas = document.createElement('div');
      divfortexareas.className = 'flex flex-col w-full h-full justify-between ';

      const divImage = document.createElement('div');
      divImage.className = 'flex flex-col w-1/2 h-full items-center justify-center';
      divImage.id = 'imageDiv' + this.stepNum;
      console.log(divImage.id);

      const actualoutcomeimage = document.createElement('img');
      this.imageid++;
      actualoutcomeimage.id = 'imageid' + this.imageid;
      actualoutcomeimage.className = 'transition-all transition-ease-out hover:shadow-2xl rounded mb-4 w-1/2 ';
      actualoutcomeimage.src = '';

      const outcomeimage = document.createElement('input');
      outcomeimage.id = 'imageFinalStep' + this.stepNum;
      outcomeimage.className = 'p-1 mx-2 border-4 hover:border-gray-600 border-gray-400';
      outcomeimage.type = 'file';
      outcomeimage.src = this.selectedRecipe.steps[helperInaddinfstepsonedit].imageFile;
      outcomeimage.addEventListener('change', (e) => {
        this.selectedFileMethod_1( e);
      });

      const button = document.createElement('button');
      button.className = 'w-8';

      // @ts-ignore
      button.addEventListener('click', this.deleteStep);
      const img = document.createElement('img');
      img.src = '../../assets/grocery/trash-alt-regular.svg';
      img.id = 'step' + this.stepNum + this.stepNum;
      img.className = 'ml-2 w-4';
      button.appendChild(img);
      this.idOfselect++;

      const divforselects = document.createElement('div');
      divforselects.className = 'flex flex-col ';

      const select = document.createElement('select');
      select.className = 'w-1/7 bg-gray-300 my-2 mr-2 p-2 h-10';
      select.name = 'Action';
      select.id = 'select' + this.idOfselect;
      select.value = this.selectedRecipe.steps[helperInaddinfstepsonedit].action;


      const select2 = document.createElement('select');
      select2.className = 'w-1/7 bg-gray-300 my-2 mr-2 p-2 h-10';
      select2.name = 'Ingredients';
      select2.id = 'select' + this.idOfselect + this.idOfselect;
      select2.value = this.selectedRecipe.steps[helperInaddinfstepsonedit].ingredient.name;


      const select3 = document.createElement('select');
      select3.className = 'w-1/7 bg-gray-300 my-2 mr-2 p-2 h-10';
      select3.name = 'Utensils';
      select3.id = 'select' + this.idOfselect + this.idOfselect + this.idOfselect + this.idOfselect;
      // select3.value = this.selectedRecipe.steps[helperInaddinfstepsonedit];


      const optiondisabled = document.createElement('option');
      optiondisabled.value = 'No Action';
      optiondisabled.textContent = 'No Action';
      select.appendChild(optiondisabled);

      const optiondisabled_2 = document.createElement('option');
      optiondisabled_2.value = 'No Ingredient';
      optiondisabled_2.textContent = 'No Ingredient';
      select2.appendChild(optiondisabled_2);

      const optiondisabled_3 = document.createElement('option');
      optiondisabled_3.value = 'No Utensil';
      optiondisabled_3.textContent = 'No Utensil';
      select3.appendChild(optiondisabled_3);

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.selected.length; i++) {
        const option = document.createElement('option');
        option.textContent = this.selected[i];
        select.appendChild(option);
      }

      // tslint:disable-next-line:prefer-for-of
      if (this.selectedIngredients.length !== 0) {
        for (let i = 0; i < this.selectedIngredients.length; i++) {
          const option1 = document.createElement('option');
          option1.textContent = this.selectedRecipe.ingredients[i].name;
          select2.appendChild(option1);
        }
      }


      if (this.selectedUtensils.length !== 0) {
        console.log(this.selectedUtensils);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.selectedUtensils.length; i++) {
          const option1 = document.createElement('option');
          option1.textContent = this.selectedRecipe.utensils[i].name;
          select3.appendChild(option1);
        }
      }

      const line = document.createElement('hr');
      line.className = 'border-t-2  border-black m-2';
      line.id = 'hr' + this.stepNum;

      const steps = document.getElementById('steps');
      divImage.appendChild(actualoutcomeimage);
      divImage.appendChild(outcomeimage);
      divforselects.appendChild(select);
      divforselects.appendChild(select2);
      divforselects.appendChild(select3);
      mainContainer.appendChild(divforselects);
      divfortexareas.appendChild(step);
      divfortexareas.appendChild(outcome);
      mainContainer.appendChild(divfortexareas);
      mainContainer.appendChild(divImage);
      mainContainer.appendChild(button);
      steps.appendChild(mainContainer);
      steps.appendChild(line);
    }
  }

  // @ts-ignore
  openGroceryDialog() {
    this.service.getIngredients();
    const dialogRef = this.dialog.open(GroceryDialogContentDialogComponent, {
      maxWidth: '800px', maxHeight: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedIngredients = this.selectedRecipe.ingredients;
    });
    this.selectedClass = parseInt(window.sessionStorage.getItem('ingredientAmount'));
  }

  openUtensilsDialog() {
    this.service.getUtensils();
    const dialogRef = this.dialog.open(UtensilDialogContentDialogComponent, {maxWidth: '800px', maxHeight: '600px'});

    dialogRef.afterClosed().subscribe(result => {
      this.selectedUtensils = this.selectedRecipe.utensils;
      console.log(`Dialog result: ${result}`);
    });
    this.selectedClassUtensils = parseInt(window.sessionStorage.getItem('utensilsAmount'));
  }

  deleteStep(event) {
    event.preventDefault();
    const target = event.target.id;
    console.log(target);
    document.getElementById(target).remove();
    const temp = target;

    const select = 'select' + temp.slice(temp.length - 1, temp.length);
    document.getElementById(select).remove();

    const slicedval = (temp.slice(temp.length - 1, temp.length));
    const stepdelete = 'step' + slicedval ;
    const outcome = 'step' + slicedval + slicedval + slicedval;
    const image = 'imageFinalStep' + slicedval;
    const select2 = 'select' + slicedval + slicedval ;
    const select3 = 'select' + slicedval + slicedval + slicedval + slicedval;
    const line = 'hr' + slicedval;

    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    const maincontianer = document.getElementById('mainContainer' + slicedval );
    maincontianer.className = 'flex flex-row w-full items-center animated fadeOut';


    sleep(600).then(() => {
      document.getElementById(stepdelete).remove();
      document.getElementById(outcome).remove();
      document.getElementById(image).remove();
      document.getElementById(select2).remove();
      document.getElementById(select3).remove();
      maincontianer.remove();
      document.getElementById(line).remove();
    });
    console.log(slicedval, stepdelete, outcome, image);
  }

  async createNewRecipe(event) {
    console.log('In Create New Recipe Method()');

    event.preventDefault();
    this.service.getUtensils();
    const target = event.target;
    // @ts-ignore
    const recipe: Recipe = {};

    recipe.name = target.querySelector('#name').value;
    recipe.description = target.querySelector('#description').value;
    recipe.ingredients = this.service.getSelectedIngredients();
    recipe.utensils = this.service.getSelectedUtensils();
    recipe.steps = [];

    for (let i = 0; i <= this.stepNum; i++) {
      // @ts-ignore
      const stepp: Step =  {};
      if (target.querySelector('#step' + i) != null) {
        stepp.description = target.querySelector('#step' + i).value;
        stepp.action = target.querySelector('#select' + i).value;
        stepp.outcome = target.querySelector('#step' + i + i + i).value;
        const file: File = target.querySelector('#imageFinalStep' + i).files[0] as File;
        const imagePath = '';
        // tslint:disable-next-line:only-arrow-functions
        await this.getImagePath(file).then(function(response) {
            stepp.imageFile = response;
          }
        );

        const name = target.querySelector('#select' + i + '' + i).value;

        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.selectedIngredients.length; j++) {
          if (this.selectedIngredients[j].name === name) {
            stepp.ingredient = this.selectedIngredients[j];
          }
        }
        recipe.steps.push(stepp);

      }
    }

    if (this.imageString !== '') {
      recipe.imagePath = this.imageString;
    }

    if (this.classs.recipes == null) {
      const recipes: Recipe[] = [];
      recipes.push(recipe);
      this.classs.recipes = recipes;
    } else {
      this.classs.recipes.push(recipe);
    }

    this.service.updateStudentsinClass(this.classs).subscribe((data: string) => {
      console.log(data);
    });

    this.router.navigateByUrl('/instructorDashRecipe');
  }

  getImagePath(file: File): Promise<any> {
    return this.service.sendPhoto(file).toPromise();
  }

  selectedFileMethod(event) {
    this.selectedFile = event.target.files[0] as File;
    this.service.sendPhoto(this.selectedFile).subscribe((data: string) => {
      this.imageString = data;
      window.sessionStorage.setItem('imagePath', this.imageString);
    });

    this.selectedFileMethod_1(event);
  }

  selectedFileMethod_1(eventMain) {
    const temp = eventMain.target.id;
    const slicedval = (temp.slice(temp.length - 1, temp.length));
    console.log('sup', slicedval);

    this.selectedFile = eventMain.target.files[0];
    console.log();
    const reader = new FileReader();

    reader.onload = (event: any) => {
      // console.log(event.target.result);
      document.getElementById('imageDiv' + slicedval).getElementsByTagName('img')[0].src  = event.target.result;
      console.log(document.getElementById('imageDiv' + slicedval).getElementsByTagName('img')[0]  );
    };
    reader.readAsDataURL(this.selectedFile);
    // console.log(this.selectedFile);
  }

  selectedFileMethodMainRecipe(eventMain) {
    this.selectedFile =  eventMain.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagURL = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
    console.log(this.selectedFile);
  }
}
