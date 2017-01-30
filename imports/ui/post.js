import React, { Component, PropTypes } from 'react';

export default class Recipe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.recipe.content}</div>
        )
    }
}

// Post requires props with a post attribute with a content attribute of type string
Recipe.propTypes = {
    recipe: PropTypes.shape({
        content: PropTypes.string
    }).isRequired
};
