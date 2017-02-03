import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  upc: {
  type: int,
  max: 48
}
});

Kitchenware = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  }
  upc: {
    type: int,
    max: 48
  }
});

Recipe = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 50
  },
  description: {
    type: String,
    label: "Description",
    max: 200
  },
  ingredients: {
    type: [Ingredient]
  },
  kitchenware: {
    type: [Kitchenware]
  },
  cookTime: {
    type: ,
    defaultValue: false,
    optional: false,
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});
