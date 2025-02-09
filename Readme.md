w# User Registration Endpoint

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
