import Sequelize from 'sequelize';

// Connecting to the DB.
const ketoDB = new Sequelize('ketocooking', "ketocook", null, {
    host: 'localhost',
    dialect: 'mysql'
});

// Define the database schemas.
const login = ketoDB.define('userId', {
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    birthdate: { type: Sequelize.DATE }
}, {
    timestamps: false
});

const recipe = ketoDB.define('recipe', {
  owner: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  cookTime: { type: Sequelize.DATE },
  cookingMethod: { type: Sequelize.STRING },
  nutrition: { type: Sequelize.STRING },
  prepTime: { type: Sequelize.DATE },
  recipeCategory: { type: Sequelize.STRING },
  recipeCuisine: { type: Sequelize.STRING },
  recipeIngredient: { type: Sequelize.STRING },
  recipeInstructions:	{ type: Sequelize.STRING },
  recipeYield: { type: Sequelize.STRING },
  suitableForDiet: { type: Sequelize.STRING },
  totalTime: { type: Sequelize.DATE }
}, {
  timestamps: false
});

const nutInfo = ketoDB.define('nutritionInformation', {
  calories: { type: Sequelize.STRING },
  carbohydrateContent: { type: Sequelize.STRING },
  cholesterolContent: { type: Sequelize.STRING },
  fatContent: { type: Sequelize.STRING },
  fiberContent: { type: Sequelize.STRING },
  proteinContent: { type: Sequelize.STRING },
  saturatedFatContent: { type: Sequelize.STRING },
  servingSize: { type: Sequelize.STRING },
  sodiumContent: { type: Sequelize.STRING },
  sugarContent: { type: Sequelize.STRING },
  transFatContent: { type: Sequelize.STRING },
  unsaturatedFatContent: { type: Sequelize.STRING }
}, {
  timestamps: false
});

// create the table if it doesn't exist yet
ketoDB.sync();

// export Post
const Recipe = ketoDB.models.recipe;
export { Recipe };
