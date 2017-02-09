import {Template} from 'meteor/templating';

import {Recipes} from '../../../api/recipe/recipeDB.js';
import './recipes.html';
import './recipe.js';

Template.recipes.helpers({
  recipes() {
    return Recipes.find({});
  }
});
