import '../../ui/layouts/recipe';
import '../../ui/layouts/mainpage';
import './body.html';
import '../components/recipeForm.js';

Template.body.onCreated(function bodyOnCreated(){
  Meteor.subscribe('recipes');
});
