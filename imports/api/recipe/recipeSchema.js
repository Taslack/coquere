import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
//import { autoform } from 'meteor/aldeed:autoform';
import { Recipes, UoMs, Kitchenwares, Ingredients } from './recipeDB.js';

Recipes.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function() {
    return true;
  }
});

Kitchenwares.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function() {
    return true;
  }
});

Ingredients.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function() {
    return true;
  }
});

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
  }//,
  // kitchenwares: {
  //   type: Array
  // },
  // 'kitchenwares.$': Kitchenware,
  // cookTime: {
  //   type: String,
  //   label: "Cook Time"
  // },
  // cookingMethod: {
  //   type: String,
  //   label: "Cooking Method"
  // },
  // ingredients: {
  //     type: Array,
  //     label: "Ingredients"
  // },
  // 'type.$': Ingredient,
  // 'type.$.ammount': SimpleSchema.Integer,
  // 'type.$.uom': UoM,
  // nutrition: {
  //   type: String,
  //   label: "Nutrition"
  // },
  // prepTime: {
  //   type: String,
  //   label: "Prep Time"
  // },
  // recipeCategory: {
  //   type: String,
  //   label: "Recipe Category"
  // },
  // recipeCuisine: {
  //   type: String,
  //   label: "Recipe Cuisine"
  // },
  // recipeInstructions: {
  //   type: String,
  //   label: "Recipe Instructions"
  // },
  // recipeYield: {
  //   type: SimpleSchema.Integer,
  //   label: "Recipe Yield"
  // },
  // totalTime: {
  //   type: String,
  //   label: "Total Time"
  // },
  // author: {
  //   type: String,
  //   label: "Author",
  //   autoValue: function() {
  //     return this.userId;
  //   }
  // },
  // createdAt: {
  //   type: Date,
  //   label: "Created",
  //   autoValue: function(){
  //     if ( this.isInsert ) {
  //       return new Date();
  //     }
  //   }
  // },
  // updated: {
  //   type: Date,
  //   label: "Updated",
  //   autoValue: function() {
  //     if ( this.isUpdate ) {
  //       return new Date();
  //     }
  //   }
  // }
});

Recipes.attachSchema(Recipe);
// Ingredients.attachSchema(Ingredient);
// Ingredients.attachSchema(Upc);
// Kitchenwares.attachSchema(Kitchenware);
// Kitchenwares.attachSchema(Upc);
// UoMs.attachSchema(UoM);
