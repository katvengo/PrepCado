const AddRecipe = `
mutation ($title: String! $author: String) {
  createBook(input: {
    title: $title
    author: $author
  }) {
    id title author
  }
}
`;