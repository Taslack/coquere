import '../../ui/layouts/recipe';
import '../../ui/layouts/mainpage';
import './body.html';

Template.body.onCreated(function bodyOnCreated(){
  Meteor.subscribe('recipes');
});
