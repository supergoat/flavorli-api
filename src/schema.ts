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
    tasks: [String]
    images: [ImageInput]
    timer: TimerInput
  }

  type Recipe {
    id: String
    author: String
    createdAt: String
    name: String
    image: String
    preparationTime: Int
    cookingTime: Int
    portions: String
    difficulty: String
    ingredients: [Ingredient]
    items: [Item]
    steps: [Step]
  }

  type Ingredient {
    qty: String
    name: String
    notes: String
    link: String
    from: Int
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
    no: Int
    type: StepType
    links: [Link]
    tag: Tag
    items: [Item]
    ingredients: [Ingredient]
    tasks: [String]
    images: [Image]
    timer: Timer
  }

  type Link {
    heading: String
    name: String!
    from: String!
    timerId: String
  }

  type Tag {
    text: String!
    color: String!
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

  type Query {
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
