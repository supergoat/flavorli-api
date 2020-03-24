export const schema = `
  input RecipeInput {
    name: String!
    image: String
    preparationTime: Int
    cookingTime: Int
    portions: String
    difficulty: String
    ingredients: [IngredientInput]
    items: [ItemInput]
    steps: [StepInput]
    notes: [String]
  }

  input IngredientInput {
    qty: String!
    name: String!
    notes: String
    link: String
  }

  input ItemInput {
    qty: String!
    name: String!
    notes: String
    link: String
  }

  input LinkInput {
    heading: String
    name: String!
    from: Int!
    timerId: String
  }

  input TagInput {
    text: String!
    color: String!
  }

  input ImageInput {
    src: String
    alt: String
  }

  input TimerInput {
    id: String!
    name: String!
    minutes: Int!
    seconds: Int!
  }

  input StepInput {
    no: Int
    type: StepType!
    links: [LinkInput]
    tag: TagInput
    items: [ItemInput]
    ingredients: [IngredientInput]
    tasks: [TaskInput]
    images: [ImageInput]
    timer: TimerInput
  }

  input TaskInput {
    name: String!
    notes: [String]
  }

  type Recipe {
    id: String
    author: String
    createdAt: String
    name: String
    image: String
    video: String
    preparationTime: Int
    cookingTime: Int
    portions: String
    difficulty: String
    notes: [String]
    ingredients: [Ingredient]
    items: [Item]
    steps: [Step]
  }

  type Ingredient {
    for: String
    list: [IngredientItem]
  }

  type IngredientItem {
    qty: String
    name: String
    notes: String
    link: String
  }

  type Item {
    qty: String
    name: String
    notes: String
    link: String
  }

  enum StepType {
    MISE_EN_PLACE
    PREPARATION
  }

  type Step {
    for: String
    heatLevel: String
    ovenTemperature: String
    links: [Link]
    tasks: [Task]
    notes: [String]
    images: [Image]
    video: String
  }

  type Link{
    name: String!
    from: Int!
    timerId: String
  }


  type Task {
    name: String!
    notes: [String]
    timer: Timer
  }

  type Image {
    src: String!
    alt: String
  }

  type Timer {
    id: String!
    name: String!
    minutes: Int!
    seconds: Int!
  }

  type Cookbook {
    id: String!
    name: String!
    recipes: [Recipe!]!
  }

  type User {
    id: String!
    createdAt: String!
    firstName: String
    lastName: String
    email: String
    cookbooks: [Cookbook!]!
  }

  type Query {
    user(id: String!): User!
    recipes: [Recipe!]!
    recipe(id: String!): Recipe!
  }

  type Mutation {
    createRecipe(recipe: RecipeInput!): Recipe!
  }

  type schema {
    query: Query
    mutation: Mutation
  }
`;
