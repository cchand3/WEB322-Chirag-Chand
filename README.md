Express CRUD API

Introduction:

This project is an Express application demonstrating CRUD operations through RESTful API endpoints for users and products. It also includes basic user authentication.

Setup:

    Clone the repository:

    ~bash git clone https://github.com/cchand3/WEB322-Chirag-Chand

Navigate to the project directory:

~bash cd WEB322-Chirag-Chand

Install dependencies:

    npm install

Usage:

Start the server:

node server.js 

The application will be available at http://localhost:3000.

API Endpoints:

Users Endpoints:

    GET /api/users: Returns all users.
    GET /api/users/:id: Returns a single user by ID.
    DELETE /api/users/:id: Deletes a user by ID.
    POST /api/users: Adds a new user.

Products Endpoints:

    GET /api/products: Returns all products.
    GET /api/products/:id: Returns a single product by ID.
    DELETE /api/products/:id: Deletes a product by ID.
    POST /api/products: Adds a new product.

Authentication:

    POST /api/login: Accepts email and password in the request body. Returns { isAuthenticated: true } if the user exists and is an admin; otherwise, returns a 401 status with { isAuthenticated: false }.
    (p.s. You can use any record that exists in the fakeUsers data file to login, just enter their credentials in the page)

Verify API Operations

Use the following cURL commands to check if the API operations are working correctly:
Users

    Get All Users:

    bash

curl http://localhost:3000/api/users

Get User by ID:

bash

# Replace :id with the actual user ID
curl http://localhost:3000/api/users/:id

Delete User by ID:

bash

# Replace :id with the actual user ID
curl -X DELETE http://localhost:3000/api/users/:id

Add a New User:

bash

    curl -X POST -H "Content-Type: application/json" -d "{\"firstName\":\"John\",\"lastName\":\"Doe\",\"email\":\"john@doe.com\",\"password\":\"johndoe\",\"dob\":\"1990-01-01T00:00:00.000Z\",\"company\":\"John Doe\",\"phone\":\"123-456-7890\"}" http://localhost:3000/api/users

Products

    Get All Products:

    bash

curl http://localhost:3000/api/products

Get Product by ID:

bash

# Replace :id with the actual product ID
curl http://localhost:3000/api/products/:id

Delete Product by ID:

bash

# Replace :id with the actual product ID
curl -X DELETE http://localhost:3000/api/products/:id

Add a New Product:

bash

curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"Sample Product\",\"description\":\"Lorem ipsum dolor sit amet\",\"price\":19.99,\"stock\":100}" http://localhost:3000/api/products    
