# Angular NgRx Project

This is an Angular project that utilizes **NgRx** for state management. The application provides functionality for managing posts and todos, with a responsive UI built using Angular components.

---

## 🚀 Getting Started

To start the development server, run the following command:

```bash
ng serve
```
---

# ✨ Features
- State Management: Managed by NgRx (Actions, Reducers, Selectors, and Effects).
- CRUD Operations: Create, Read, Update, and Delete posts and todos.
- Dynamic Routing: Navigate between posts and todos dynamically.
- LocalStorage Synchronization: Persist state across browser reloads.

--- 
# APIs Used
The following APIs are used in this project for fetching and managing data:

1. Posts API
   Endpoints:
  - GET /posts - Fetch all posts.
  - POST /posts - Add a new post.
  - PUT /posts/{id} - Update an existing post.
  - DELETE /posts/{id} - Delete a post.
2. Todos API
   Endpoints:
  - GET /todos - Fetch all todos.
  - POST /todos - Add a new todo.
  - PUT /todos/{id} - Update an existing todo.
  - DELETE /todos/{id} - Delete a todo.
3. Users Api
   EndPoints:
  - GET /users - Fetch all users.
  - GET /users?id - Get user by ID
