import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Recipe from './post'

/**
 * This React component is responsible for querying Apollo for the posts
 * and passing the results to the child Post components for rendering
 */
class Recipes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let recipes = <div></div>
        if (this.props.data.recipes && this.props.data.recipes instanceof Array) {
            recipes = (
                <div>
                    {this.props.data.recipes.map(function(recipe) {
                        return <Recipe key={recipe.id} recipe={recipe} />;
                    })}
                </div>
            )
        }

        return recipes;
    }
}

// Posts requires props with a data attribute of an array of posts
Recipes.propTypes = {
    data: PropTypes.shape({
        recipes: PropTypes.array
    }).isRequired
};

// Define the graphql query to retrieve the posts and the desired attributes
const allRecipes = gql`
  query RecipesForDisplay {
    recipes {
      id,
      content,
      views
    }
  }
`;

// Use the graphql container to run the allPosts query and pass the results to PostsContainer
export default PostsContainer = graphql(allPosts, {
    options: {pollInterval: 5000}
})(Posts);
