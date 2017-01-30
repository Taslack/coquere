import { Recipe } from './connectors';

// create the resolve functions for the available GraphQL queries
export default resolvers = {

    Query: {
        recipes(_, args){
            return Recipe.findAll({where: args});
        },
    }
};
