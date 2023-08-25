import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] =[
    new Recipe("A test recipe", 'this is a test recipe', 'http://blog.thefruitcompany.com/wp-content/uploads/2012/12/IMG_1443-1024x764.jpg'),
    new Recipe("A second test recipe","this is second test recipe","https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/1:1/w_1920,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg")
  ];

}
