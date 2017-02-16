import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Recipes } from '../../../api/recipe/recipeDB.js';
import './recipes.html';


Template.recipes.onCreated(function (){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes.all');
  });
});

Template.recipes.helpers({
  recipes() {
    return Recipes.find({});
  }
});
