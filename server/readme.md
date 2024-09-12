# Backend Repo for FSD61WDE FSD Demo

This is the backend repo for the FSD61WDE FSD Demo. This repo contains the backend code for the demo. The backend is built using Node.js and Express.js. The database used is MongoDB.

Steps to setup the backend:

1. Enable Git and Sync with GitHub.
2. Setup a Git Workflow.
3. Setup Atlas MongoDB Cloud Account.
4. Create a Cluster in Atlas.
5. Create a Database in the Cluster.
6. Create a Collection in the Database.
7. Connect the Database to the Backend.

Application: Social Media App

The application is a social media app where users can post, like, and comment on posts. The app has the following features:

1. User Authentication: Users can sign up and login to the app.
2. Create Post: Users can create a post with an image and description.
3. Like Post: Users can like a post.
4. Comment on Post: Users can comment on a post.
5. View Posts: Users can view all the posts.

Identify the entities and attributes:

1. User

   - id
   - name
   - email
   - password
   - profilePicture

2. Post

   - id
   - userId
   - description
   - image
   - likes
   - comments

3. Comment
   - id
   - userId
   - postId
   - comment

Identify the relationships:

1. User-Post: One-to-Many
2. Post-Comment: One-to-Many

Identify the routes:

1. Auth Routes

   - POST /api/auth/register
   - POST /api/auth/login
   - POST /api/auth/logout
   - GET /api/auth/me

2. User Profile Routes

   - GET /api/users : Get a user's profile by ID
   - PUT /api/users : Update a user's profile
   - DELETE /api/users : Delete a user's profile

3. Post Routes

   - POST /api/posts : Create a post
   - GET /api/posts : Get all posts
   - GET /api/posts/:id : Get a post by ID
   - PUT /api/posts/:id : Update a post by ID
   - DELETE /api/posts/:id : Delete a post by ID

4. Comment Routes

   - POST /api/comments : Create a comment
   - GET /api/comments : Get all comments
   - GET /api/comments/:id : Get a comment by ID
   - PUT /api/comments/:id : Update a comment by ID
   - DELETE /api/comments/:id : Delete a comment by ID

5. Admin Routes

   - GET /api/admin/users : Get all users
   - GET /api/admin/posts : Get all posts
   - GET /api/admin/comments : Get all comments
   - DELETE /api/admin/users/:id : Delete a user by ID
   - DELETE /api/admin/posts/:id : Delete a post by ID
   - DELETE /api/admin/comments/:id : Delete a comment by ID
   - PUT /api/admin/posts/:id : Update a post by ID
   - PUT /api/admin/comments/:id : Update a comment by ID
   - PUT /api/admin/users/:id : Update a user by ID
