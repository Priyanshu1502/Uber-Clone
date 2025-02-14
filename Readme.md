# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the user's password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user data.

### Request Body:

The request body should be a JSON object with the following fields:

-`user`: An Object containing:

- `fullname`: An object containing:
  - `firstname` (string, required, minimum length: 3)
  - `lastname` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:

This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) along with the user data.

### Request Body:

The request body should be a JSON object with the following fields:

- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:

This endpoint retrieves the authenticated user's profile information. It requires a valid JWT token in the Authorization header.

### Authentication:

Required. Include the JWT token in the request header:

- `Authorization: Bearer <token>`

### Responses:

#### Success (200):

- **Description**: Successfully retrieved user profile
- **Body**:
  ```json
  {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
  ```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:

This endpoint is used to log out the authenticated user. It clears the authentication token and adds it to the blacklist.

### Authentication:

Required. Include the JWT token in the request header:

- `Authorization: Bearer <token>`

### Responses:

#### Success (200):

- **Description**: User logged out successfully.
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
