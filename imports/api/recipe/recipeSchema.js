//import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
//import { autoform } from 'meteor/aldeed:autoform';

import { Recipes } from './recipeDB.js';

Upc = new SimpleSchema({
  upc: {type: SimpleSchema.Integer, max: 48, label: "UPC"}
});

UoM = new SimpleSchema({
  uom: {
      type: String,
      label: "Unit of Measure",
      allowedValues: ['dr.', 'gt.', 'gtt.', 'smdg.', 'smi.', 'pn.', 'ds.','ssp.', 'coffeespoon', 'Fluid dram', 'tsp.', 'dsp.', 'dssp.', 'dstspn.', 'tbsp.', 'fl.oz.', 'oz.', 'wgf.', 'tcf.', 'C', 'pt.', 'qt.', 'pot.', 'gal.']
    }
});

Ingredient = new SimpleSchema({
  ingredient: {
    type: String,
    label: "Ingredient"
  },
  upc: {
    type: Array
  },
  'upc.$': Upc
});

Kitchenware = new SimpleSchema({
  kitchenware: {
    type: String,
    label: "Kitchenware"
  },
  upc: {
    type: Array
  },
  'upc.$': Upc
});

Recipe = new SimpleSchema({
  recipe: {
    type: String,
    label: "Name",
    max: 50
  },
  description: {
    type: String,
    label: "Description",
    max: 200
  },
  kitchenwares: {
    type: Array
  },
  'kitchenwares.$': Kitchenware,
  cookTime: {
    type: String,
    label: "Cook Time"
  },
  cookingMethod: {
    type: String,
    label: "Cooking Method"
  },
  ingredients: {
      type: Array,
      label: "Ingredients"
  },
  'type.$': Ingredient,
  'type.$.ammount': SimpleSchema.Integer,
  'type.$.uom': UoM,
  nutrition: {
    type: String,
    label: "Nutrition"
  },
  prepTime: {
    type: String,
    label: "Prep Time"
  },
  recipeCategory: {
    type: String,
    label: "Recipe Category"
  },
  recipeCuisine: {
    type: String,
    label: "Recipe Cuisine"
  },
  recipeInstructions: {
    type: String,
    label: "Recipe Instructions"
  },
  recipeYield: {
    type: SimpleSchema.Integer,
    label: "Recipe Yield"
  },
  totalTime: {
    type: String,
    label: "Total Time"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    }
    /*autoform: {
      type: "hidden"
    }*/
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date();
    }
    /*autoform: {
      type: "hidden"
    }*/
  }
});

Recipes.attachSchema(Upc);
//Recipes.attachSchema(Ingredient, {selector: {type: 'varient'}});
//Recipes.attachSchema(Kitchenware, {selector: {type: 'simple'}});
//Recipes.attachSchema(UoM, {selector: {type: 'simple'}});
//Recipes.attachSchema(Recipe, {selector: {type: 'simple'}});
