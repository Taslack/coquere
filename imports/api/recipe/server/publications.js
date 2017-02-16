import { Meteor } from 'meteor/meteor';
import { Recipes, UoMs, Kitchenwares, Ingredients } from '../recipeDB.js';

Meteor.publish('recipes.all', function () {
  return Recipes.find({});
});

Meteor.publish('kitchenwares.all', function () {
  return Kitchenwares.find({});
});
