export default typeDefs = [`
type Recipe {
  id: Int
  username: String
  password: Int
}
type Query {
  posts(views: Int): [Recipe]
}
schema {
  query: Query
}
`];
