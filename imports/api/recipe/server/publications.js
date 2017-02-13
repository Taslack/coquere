import { Meteor } from 'meteor/meteor';
import { Recipes } from '../recipeDB.js';

Meteor.publish('recipes.all', function () {
  return Recipes.find();
});
