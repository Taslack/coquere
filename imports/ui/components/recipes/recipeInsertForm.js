import { Template } from 'meteor/templating';
import { autoForm } from 'meteor/aldeed:autoform';
import { Meteor } from 'meteor/meteor';

import { Recipes, UoMs, Kitchenwares, Ingredients } from '../../../api/recipe/recipeDB.js';
import '../../../api/recipe/recipeSchema.js';
import './recipeInsertForm.html';

Template.recipeInsertForm.onCreated(function (){
  var self = this;
  self.autorun(function(){
    self.subscribe('kitchenware.all');
    self.subscribe('recipes.all');
  });
});

Template.recipeInsertForm.helpers({
  Recipes: function () {
    return Recipes;
  },
  Kitchenwares: function() {
    return Kitchenwares;
  }
});


// Templates for recipeInsertFormTest.
Template.recipeInsertFormTest.helpers({
  Recipes: function () {
    return Recipes;
  }
});

Template.recipeInsertFormTest.onCreated(function (){
  var self = this;
  self.autorun(function(){
    self.subscribe('kitchenwares.all');
    self.subscribe('recipes.all');
  });
});
