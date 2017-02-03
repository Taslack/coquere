import {Template} from 'meteor/templating';

import {Recipes} from '../../../api/recipe/ketoDB.js';
import './recipes.html';

Template.recipes.helpers({
  recipes() {
    return Recipes.find({});
  }
})
