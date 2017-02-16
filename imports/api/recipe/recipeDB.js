import { Mongo } from 'meteor/mongo';

export const Recipes = new Mongo.Collection('recipes');
export const UoMs = new Mongo.Collection('uoms');
export const Ingredients = new Mongo.Collection('ingredients');
export const Kitchenwares = new Mongo.Collection('kitchenware');
