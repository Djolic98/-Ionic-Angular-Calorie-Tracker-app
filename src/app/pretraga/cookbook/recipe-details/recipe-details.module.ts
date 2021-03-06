import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDetailsPageRoutingModule } from './recipe-details-routing.module';

import { RecipeDetailsPage } from './recipe-details.page';
import { FoodRecipeComponent } from '../food-of-recipe/food-recipe.component';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailsPageRoutingModule
  ],
  declarations: []
})
export class RecipeDetailsPageModule {}
