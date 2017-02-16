import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/body/body.js';
import '../../ui/components/search/search.js';
import '../../ui/components/navMenu/navMenu.js';
import '../../ui/components/recipes/recipes.js';
import '../../ui/components/recipes/recipeInsertForm.js';
import '../../ui/components/recipes/recipe.js';

FlowRouter.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('mainLayout', {search: 'search', menu: 'toolbarMenu', main: 'recipes'});
   }
});

FlowRouter.route('/addrecipe', {
  name: 'addrecipe',
  action(){
    BlazeLayout.render('mainLayout', {menu: 'toolbarMenu', main: 'recipeInsertForm'});
   }
});

FlowRouter.route('/addrecipetest', {
  name: 'addrecipe',
  action(){
    BlazeLayout.render('mainLayout', {menu: 'toolbarMenu', main: 'recipeInsertFormTest'});
   }
});
