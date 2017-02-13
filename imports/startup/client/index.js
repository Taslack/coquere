import './routes.js';

Template.body.onCreated(function bodyOnCreated(){
  Meteor.subscribe('recipes');
});
