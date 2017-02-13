import { assert } from 'meteor/practicalmeteor:chai';
import { Recipes } from '../recipeDB.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

/*  Example Code for tests.

describe('recipes publications', function () {
  beforeEach(function () {
    Recipes.remove({});
    Recipes.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('recipes.all', function () {
    it('sends all recipes', function (done) {
      const collector = new PublicationCollector();
      collector.collect('recipes.all', (collections) => {
        assert.equal(collections.links.length, 1);
        done();
      });
    });
  });
});
*/
