import { Mongo } from 'meteor/mongo';

import './recipeSchema.js';

export const Recipes = new Mongo.Collection('recipes');


/*Meteor.methods({
  'recipe.insert'(text){
    check(text, String);
    // User check.
    if (! this.userId){
      throw new Meteor.Error('not-authorized');
    }

    Recipes.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },
  'recipes.remove'(recipeId){
    check(recipeId, String);
    const recipe = Recipes.findOne(recipeId);
    if (recipe.owner !== this.userId){
      throw new Meteor.Error(not-authorized);
    }
    Recipes.remove(recipeId);*/
/*  },  Remove sample code.
  'tasks.setChecked'(recipeId, setChecked){
    check(recipeId, String);
    check(setChecked, Boolean);
    const task = Task.findOne(taskId);
    if (task.private && task.owner !== this.userId){
      throw new Meteor.Error('not-authorized');
    }
    Tasks.update(taskId, {$set: {checked: setChecked}});
  },
  'tasks.setPrivate'(taskId, setToPrivate){
    check(taskId, String);
    check(setToPrivate, Boolean);
    const task = Tasks.findOne(taskId);
    if (task.owner !== this.userId){
      throw new Meteor.Error('not-authorized');
    }
    Tasks.update(taskId, {$set: {private: setToPrivate}});
  }
});*/
